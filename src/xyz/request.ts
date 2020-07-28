namespace Xyz {
    export type Handle = string;

    // Resource

    export interface Resource {
        type?: string;
        actions?: string[];
        locations?: string[];
        datatypes?: string[];
    }
    export type Resources = Array<Resource | Handle>;

    // Key
    export enum KeyType {
        JwsDetached = 'jwsd',
        HttpSignature = 'httpsig',
        Mtls = 'mtls'
    }

    export interface BaseKey {
        proof: KeyType;
    }
    
    export interface JwkKey extends BaseKey {
        jwk: {
            kty: string;
            e: string;
            kid: string;
            alg: string;
            n: string;
        };
    }

    export interface MtlsKey extends BaseKey {
        cert: string;

    }

    export interface Mtls256Key extends BaseKey {
        'cert#S256': string;
    }

    export type Key = JwkKey | MtlsKey | Mtls256Key | Handle;

    // subject

    export type Subject = any;

    export interface Request {
        key?: Key;
        resources?: Resources | Record<string, Resources>;
        subject?: Subject;
        display?: any;
        interact?: any;
        user?: any;
        capabilities?: any;
    }
}