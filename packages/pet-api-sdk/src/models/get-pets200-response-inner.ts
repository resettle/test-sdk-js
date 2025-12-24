import { mapValues } from '../runtime'
/**
 *
 * @export
 * @interface GetPets200ResponseInner
 */
export interface GetPets200ResponseInner {
  /**
   * The id of the pet
   * @type {string}
   * @memberof GetPets200ResponseInner
   */
  id: string
  /**
   * The name of the pet
   * @type {string}
   * @memberof GetPets200ResponseInner
   */
  name: string
}

/**
 * Check if a given object implements the GetPets200ResponseInner interface.
 */
export function instanceOfGetPets200ResponseInner(
  value: object,
): value is GetPets200ResponseInner {
  if (!('id' in value) || value['id'] === undefined) return false
  if (!('name' in value) || value['name'] === undefined) return false
  return true
}

export function GetPets200ResponseInnerFromJSON(
  json: any,
): GetPets200ResponseInner {
  return GetPets200ResponseInnerFromJSONTyped(json, false)
}

export function GetPets200ResponseInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetPets200ResponseInner {
  if (json == null) {
    return json
  }
  return {
    id: json['id'],
    name: json['name'],
  }
}

export function GetPets200ResponseInnerToJSON(
  json: any,
): GetPets200ResponseInner {
  return GetPets200ResponseInnerToJSONTyped(json, false)
}

export function GetPets200ResponseInnerToJSONTyped(
  value?: GetPets200ResponseInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    id: value['id'],
    name: value['name'],
  }
}
