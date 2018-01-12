import * as React from 'react';
import styles from './QuickLinks.module.scss';
import { IQuickLinksProps } from './IQuickLinksProps';
import { escape } from '@microsoft/sp-lodash-subset';

//Use this to get SharePoint environment
import {
  Environment,
  EnvironmentType
} from '@microsoft/sp-core-library';

import ISPLinkList from '../interfaces/ISharePointLinkListItem';

//State defaults to type object but we want a bit more than that so let's make an interface
export interface IQuickLinksState{
  HelpfulLinks: ISPLinkList[];
}

import MockHttpClient from '../services/MockSharePointHttpClient';
import { SharePointService } from '../services/SharePointClient';


export default class QuickLinks extends React.Component<IQuickLinksProps, IQuickLinksState> {
  constructor(props: IQuickLinksProps, state: IQuickLinksState){
    super(props);
    const testItems: ISPLinkList[] = [{Title: "Google", Url: "http://www.google.com", Id: 1 } as ISPLinkList]; 
  
    this.state = {
      HelpfulLinks: testItems,
    };

  }

  public componentWillMount(): void{
    if (Environment.type === EnvironmentType.Local) {
      this._getMockListData().then((response) => {
        const ListItems: ISPLinkList[] = response;
        this.setState({HelpfulLinks: ListItems});
      });
    }else if (Environment.type == EnvironmentType.SharePoint ||
              Environment.type == EnvironmentType.ClassicSharePoint) {
      if(!this._listNotConfigured(this.props)){
        const sharepointClient = new SharePointService(this.props.listName, this.props.context, this.props.spContext );
        sharepointClient.getItems().then((sharePointResponse) => {
          const ListItems: ISPLinkList[] = sharePointResponse;
          this.setState({HelpfulLinks: ListItems});
        });
      }
    }
  }

  public render(): React.ReactElement<IQuickLinksProps> {
    const links: JSX.Element[] = this.state.HelpfulLinks.map((item: ISPLinkList, i: number): JSX.Element => {
      if (i < this.props.numberOfLinks) {
        return (
          <li key={item.Id}><a href={item.Url} target='_blank'>{item.Title}</a></li>
        );
      }
    });

    return (
      <div className={styles.quickLinks}>
        <div className={styles.container}>
          <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`}>
            <div className="ms-Grid-col ms-lg10 ms-xl8 ms-xlPush2 ms-lgPush1">
              <span className="ms-font-xl ms-fontColor-white">Helpful Links!</span>
              {this._statusElement(this.props)}
              <p className="ms-font-l ms-fontColor-white">Below is a list of links you can use to learn more about the SharePoint Framework</p>
              <p className="ms-font-l ms-fontColor-white">Environment from props: {this.props.context}</p>
              <ul className={styles.customList}>
                {links}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  private _getMockListData(): Promise<ISPLinkList[]> {
    return MockHttpClient.getListItems()
      .then((data: ISPLinkList[]) => {
        var listData: ISPLinkList[] = data;
        return listData;
      }) as Promise<ISPLinkList[]>;
  }

  private _listNotConfigured(props: IQuickLinksProps): boolean {
    return props.listName === undefined ||
      props.listName === null ||
      props.listName.length === 0;
  }

  private _statusElement(props: IQuickLinksProps): JSX.Element {
    if(this._listNotConfigured(props)){
      return (<p className="ms-font-xl ms-fontColor-red">List not configured</p>);
    }else{
      return (<p className="ms-font-xl ms-fontColor-red"></p>);
    }
  }

}
