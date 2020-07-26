import {Token} from './_types';

// @see https://tools.ietf.org/html/rfc6749#section-4.2.2
export interface RefreshParams extends Record<string, string> {
    grant_type: 'refresh_token';
    refresh_token: string;
    client_id: string;
    client_secret: string;
    scope?: string;
    refresh_uri: string;
}

export function token(params: RefreshParams, request: Function): Promise<Token> {
    const {refresh_uri: url, ...data} = params;
    // todo accept type?! form/json
    return request({method: 'POST', url, data}).then(res => res.body);
}