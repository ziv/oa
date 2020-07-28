// import {Oauth2AcceptType} from './oauth2.types';
//
// export interface IOauth2Config {
//     // client
//     clientId: string;
//     clientSecret: string;
//     clientIdParamName: string
//     clientSecretParamName: string;
//
//     // authorization server
//     tokenHost: string;
//     tokenPath : string;
//     revokePath: string;
//     authorizePath : string;
//
//     // vendor specific
//     acceptType: Oauth2AcceptType;
//     scope?: string;
//
//     // local
//     redirectUri?: string;
// }
//
// export class Oauth2Config implements IOauth2Config {
//     // client
//     clientId: string;
//     clientSecret: string;
//     clientIdParamName = 'client_id';
//     clientSecretParamName = 'cliena`t_secret';
//
//     // authorization server
//     tokenHost: string;
//     tokenPath = '/oauth/token';
//     revokePath = '/oauth/revoke';
//     authorizePath = '/oauth/authorize';
//
//     // vendor specific
//     acceptType: Oauth2AcceptType = Oauth2AcceptType.Form;
//
//     constructor(init?: Partial<IOauth2Config>) {
//         Object.assign(this, init);
//     }
// }