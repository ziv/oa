// types
export type Code = 'authorization_code' | 'code' | string;

// enums
export enum AcceptType {
    Form = 'form',
    Json = 'json'
}

// interfaces
export interface Config {
    // http client
    request: Function;

    // oauth2 client
    clientId: string;
    clientSecret: string;
    clientIdParamName: string
    clientSecretParamName: string;

    // authorization server
    tokenHost: string;
    tokenPath : string;
    revokePath: string;
    authorizePath : string;

    // vendor specific
    acceptType: AcceptType;
    scope?: string;

    // local
    redirectUri?: string;
}

// @see https://tools.ietf.org/html/rfc6749#section-4.2.2
export interface Token extends Record<string, number | string> {
    access_token: string;
    refresh_token?: string;
    token_type?: string;
    expires?: number;
    expires_in?: number;
    scope?: string;
    state?: string;
}