import { mapValues } from '../runtime'
/**
 *
 * @export
 * @interface PostUsersRequest
 */
export interface PostUsersRequest {
  /**
   *
   * @type {string}
   * @memberof PostUsersRequest
   */
  email: string
}

/**
 * Check if a given object implements the PostUsersRequest interface.
 */
export function instanceOfPostUsersRequest(
  value: object,
): value is PostUsersRequest {
  if (!('email' in value) || value['email'] === undefined) return false
  return true
}

export function PostUsersRequestFromJSON(json: any): PostUsersRequest {
  return PostUsersRequestFromJSONTyped(json, false)
}

export function PostUsersRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): PostUsersRequest {
  if (json == null) {
    return json
  }
  return {
    email: json['email'],
  }
}

export function PostUsersRequestToJSON(json: any): PostUsersRequest {
  return PostUsersRequestToJSONTyped(json, false)
}

export function PostUsersRequestToJSONTyped(
  value?: PostUsersRequest | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    email: value['email'],
  }
}
