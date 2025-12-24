import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface GetUsers200ResponseInner
 */
export interface GetUsers200ResponseInner {
    /**
     * The id of the user
     * @type {string}
     * @memberof GetUsers200ResponseInner
     */
    id: string;
    /**
     * The email of the user
     * @type {string}
     * @memberof GetUsers200ResponseInner
     */
    email: string;
}

/**
 * Check if a given object implements the GetUsers200ResponseInner interface.
 */
export function instanceOfGetUsers200ResponseInner(value: object): value is GetUsers200ResponseInner {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('email' in value) || value['email'] === undefined) return false;
    return true;
}

export function GetUsers200ResponseInnerFromJSON(json: any): GetUsers200ResponseInner {
    return GetUsers200ResponseInnerFromJSONTyped(json, false);
}

export function GetUsers200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetUsers200ResponseInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'email': json['email'],
    };
}

export function GetUsers200ResponseInnerToJSON(json: any): GetUsers200ResponseInner {
    return GetUsers200ResponseInnerToJSONTyped(json, false);
}

export function GetUsers200ResponseInnerToJSONTyped(value?: GetUsers200ResponseInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'email': value['email'],
    };
}

