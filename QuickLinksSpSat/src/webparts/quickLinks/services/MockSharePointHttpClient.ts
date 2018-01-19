import ISPLinkList from '../interfaces/ISharePointLinkListItem';

export default class MockHttpClient  {

    private static _items: ISPLinkList[] = [{ Title: 'Microsoft', Id: 1 , Url: 'https://docs.microsoft.com/en-us/sharepoint/dev/spfx/sharepoint-framework-overview'},
                                        { Title: 'TypeScript', Id: 2, Url: 'https://www.typescriptlang.org/'},
                                        { Title: 'React', Id: 3, Url: 'https://reactjs.org/' },
                                        { Title: 'WebPack', Id: 4, Url: 'https://webpack.js.org/'},
                                        { Title: 'Stack Overflow', Id: 5, Url: 'https://sharepoint.stackexchange.com/questions/tagged/spfx-webparts+spfx+spfx-tooling'},
                                        { Title: 'GitHub', Id: 6, Url: 'https://github.com/SharePoint/sp-dev-docs/issues'},
                                        { Title: 'Me', Id: 7, Url: 'https://twitter.com/pkwitbrod'},
                                        { Title: 'Valorem', Id: 8, Url: 'https://www.valorem.com/'}
                                    ];


    public static getListItems(): Promise<ISPLinkList[]> {
    return new Promise<ISPLinkList[]>((resolve) => {
            resolve(MockHttpClient._items);
        });
    }
}