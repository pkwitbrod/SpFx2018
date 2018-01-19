import { SPHttpClient } from '@microsoft/sp-http';



import ISPLinkList from '../interfaces/ISharePointLinkListItem';
import SPHttpClientResponse from "@microsoft/sp-http/lib/spHttpClient/SPHttpClientResponse";




export class SharePointService {
    
      constructor(private _listName: string, private _siteUrl: string, private _httpClient: SPHttpClient) {
          
      }
    
      public getItems(): Promise<ISPLinkList[]> {
        return this._getItems();
      }
    

      private _getItems(): Promise<ISPLinkList[]> {
        const queryString: string = `?$select=Id,Title,Url`;
        const url: string = `${this._siteUrl}/_api/lists/getbytitle('${this._listName}')/items${queryString}`;
        return this._httpClient.get(url, SPHttpClient.configurations.v1)
        .then((response: SPHttpClientResponse) => {
            return response.json();
        }).then((json: {value: ISPLinkList[]} ) =>{
            return json.value.map((task: ISPLinkList) => {
                return task;
            });
        });
      }
    
    
    }