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




export default class QuickLinks extends React.Component<IQuickLinksProps, IQuickLinksState> {
  


  constructor(props: IQuickLinksProps, state: IQuickLinksState){
    super(props);
    const defaultEnvironment: string = "Local";
    const defaultNumber: number = props.numberOfLinks;
    const testItems: ISPLinkList[] = [{Title: "Google", Url: "http://www.google.com", Id: 1 } as ISPLinkList] 
    
    this.state = {
      HelpfulLinks: testItems
    }

  }

  public componentWillMount(): void{
    if (Environment.type === EnvironmentType.Local) {
      this._getMockListData().then((response) => {
        const ListItems: ISPLinkList[] = response;
        this.setState({HelpfulLinks: ListItems});
      });
    }else if (Environment.type == EnvironmentType.SharePoint ||
              Environment.type == EnvironmentType.ClassicSharePoint) {
      
    }
  }

 public componentDidUpdate(previousProps: IQuickLinksProps, previousState: IQuickLinksState ): void{

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
              <span className="ms-font-xl ms-fontColor-white">Welcome to SpFx!</span>
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


}
