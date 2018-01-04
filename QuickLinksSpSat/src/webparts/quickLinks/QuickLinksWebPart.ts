import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneDropdown,
  PropertyPaneToggle,
} from '@microsoft/sp-webpart-base';

import * as strings from 'QuickLinksWebPartStrings';
import QuickLinks from './components/QuickLinks';
import { IQuickLinksProps } from './components/IQuickLinksProps';

export interface IQuickLinksWebPartProps {
  numberOfLinks: number;
  listName: string;
  context: string;
}

export default class QuickLinksWebPart extends BaseClientSideWebPart<IQuickLinksWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IQuickLinksProps > = React.createElement(
      QuickLinks,
      {
        numberOfLinks: this.properties.numberOfLinks,
        listName: this.properties.listName,
        context: this.context.pageContext.web.title
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: 'QuickLinks Properties',
              groupFields: [
              PropertyPaneDropdown('numberOfLinks', {
                label: 'Number of Links to Display',
                options: [
                  { key: 1, text: '1'},
                  { key: 3, text: '3' },
                  { key: 5, text: '5' },
                  { key: 10, text: '10'}
                ],selectedKey: 5
              }),
                PropertyPaneTextField('listName',{
                  label: 'Link Source (SharePoint List)'
                })
            ]
            }
          ]
        }
      ]
    };
  }
}
