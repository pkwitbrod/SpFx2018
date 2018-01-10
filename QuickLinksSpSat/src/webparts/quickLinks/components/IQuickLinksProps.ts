import SPHttpClient from "@microsoft/sp-http/lib/spHttpClient/SPHttpClient";
import WebPartContext from "@microsoft/sp-webpart-base/lib/core/WebPartContext";

export interface IQuickLinksProps {
  numberOfLinks: number;
  listName: string;
  context: WebPartContext;
  spContext: SPHttpClient;
}
