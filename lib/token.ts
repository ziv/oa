import {Token} from './_types';

// @see https://tools.ietf.org/html/rfc6749#section-4.2.2
export interface TokenParams extends Record<string, string> {
    grant_type: 'authorization_code';
    code: string;
    redirect_uri: string;
    client_id: string;
    token_uri: string;
}

export function token(params: TokenParams, request: Function): Promise<Token> {
    const {token_uri: url, ...data} = params;
    // todo accept type?! form/json
    return request({method: 'POST', url, data}).then(res => res.body);
}