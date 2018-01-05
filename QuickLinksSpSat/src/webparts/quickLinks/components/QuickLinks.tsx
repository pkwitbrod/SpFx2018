import * as React from 'react';
import styles from './QuickLinks.module.scss';
import { IQuickLinksProps } from './IQuickLinksProps';
import { escape } from '@microsoft/sp-lodash-subset';

//Use this to get SharePoint environment
import {
  Environment,
  EnvironmentType
} from '@microsoft/sp-core-library';

//State defaults to type object but we want a bit more than that so let's make an interface
export interface IQuickLinksState{
  QuickLinkEnvironMent: string;
  QuickLinkNumberOfLinks: number;
}

export default class QuickLinks extends React.Component<IQuickLinksProps, IQuickLinksState> {
  


  constructor(props: IQuickLinksProps, state: IQuickLinksState){
    super(props);
    const defaultEnvironment: string = "Local";
    const defaultNumber: number = props.numberOfLinks;

    this.state = {
      QuickLinkEnvironMent: defaultEnvironment,
      QuickLinkNumberOfLinks: defaultNumber
    }

  }

  public componentWillMount(): void{
    if (Environment.type === EnvironmentType.Local) {
      this.setState({QuickLinkEnvironMent: "Local Workbench"});
    }else if (Environment.type == EnvironmentType.SharePoint ||
              Environment.type == EnvironmentType.ClassicSharePoint) {
      this.setState({QuickLinkEnvironMent: "Actual SharePoint"});
    }
  }

 public componentDidUpdate(previousProps: IQuickLinksProps, previousState: IQuickLinksState ): void{
  if(previousState.QuickLinkNumberOfLinks !== this.props.numberOfLinks){
    this.setState({QuickLinkNumberOfLinks: this.props.numberOfLinks})
  }
 }
  
  public render(): React.ReactElement<IQuickLinksProps> {
    return (
      <div className={styles.quickLinks}>
        <div className={styles.container}>
          <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`}>
            <div className="ms-Grid-col ms-lg10 ms-xl8 ms-xlPush2 ms-lgPush1">
              <span className="ms-font-xl ms-fontColor-white">Welcome to SpFx!</span>
              <p className="ms-font-l ms-fontColor-white">Below is a list {this.state.QuickLinkNumberOfLinks} links you can use to learn more about the SharePoint Framework</p>
              <p className="ms-font-l ms-fontColor-white">Environment from props: {this.props.context}</p>
              <p className="ms-font-l ms-fontColor-white">Environment from State: {this.state.QuickLinkEnvironMent}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
