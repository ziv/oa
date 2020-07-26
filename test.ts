// import {URLSearchParams} from 'url';
//
//
// const usp = new URLSearchParams({
//     client: 'name',
//     form: 'json'
// });
//
//
// usp.
// console.log(...usp);

import {Oauth2} from './lib/oauth2';
import {Oauth2Config} from './lib/oauth2.config';

const oauth2 = new Oauth2(new Oauth2Config({clientId: 'zzz', clientSecret: 'xxx', tokenHost: 'https://login.xffr.com/', }));
console.log(oauth2.getAuthorizeUrl());