import {URLSearchParams} from 'url';

// @see https://tools.ietf.org/html/rfc6749#section-4.1.1
export interface AuthorizeParams extends Record<string, string> {
    client_id: string;
    response_type: string;
    redirect_uri: string;
    scope: string;
    state: string;
    auth_uri: string;
}

export function authorize(params: AuthorizeParams): string {
    const {auth_uri, ...rest} = params;
    const data = new URLSearchParams(rest);
    return `${auth_uri}?${data}`;
}