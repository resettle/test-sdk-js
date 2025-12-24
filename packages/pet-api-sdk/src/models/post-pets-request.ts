import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PostPetsRequest
 */
export interface PostPetsRequest {
    /**
     * 
     * @type {string}
     * @memberof PostPetsRequest
     */
    name: string;
}

/**
 * Check if a given object implements the PostPetsRequest interface.
 */
export function instanceOfPostPetsRequest(value: object): value is PostPetsRequest {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function PostPetsRequestFromJSON(json: any): PostPetsRequest {
    return PostPetsRequestFromJSONTyped(json, false);
}

export function PostPetsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostPetsRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function PostPetsRequestToJSON(json: any): PostPetsRequest {
    return PostPetsRequestToJSONTyped(json, false);
}

export function PostPetsRequestToJSONTyped(value?: PostPetsRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
    };
}

