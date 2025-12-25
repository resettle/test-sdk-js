import type { GetPets200ResponseInner, PostPetsRequest } from '../models/index'
import {
  GetPets200ResponseInnerFromJSON,
  GetPets200ResponseInnerToJSON,
  PostPetsRequestFromJSON,
  PostPetsRequestToJSON,
} from '../models/index'
import * as runtime from '../runtime'

export interface DeletePetsPetIdRequest {
  petId: string
}

export interface GetPetsRequest {
  limit?: number
  page?: number
}

export interface GetPetsPetIdRequest {
  petId: string
}

export interface PatchPetsPetIdRequest {
  petId: string
  postPetsRequest?: PostPetsRequest
}

export interface PostPetsOperationRequest {
  postPetsRequest?: PostPetsRequest
}

/**
 *
 */
export class DefaultApi extends runtime.BaseAPI {
  /**
   * Delete pet
   */
  async deletePetsPetIdRaw(
    requestParameters: DeletePetsPetIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<object>> {
    if (requestParameters['petId'] == null) {
      throw new runtime.RequiredError(
        'petId',
        'Required parameter "petId" was null or undefined when calling deletePetsPetId().',
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['X-RapidAPI-Proxy-Secret'] =
        await this.configuration.apiKey('X-RapidAPI-Proxy-Secret') // RapidAuth authentication
    }

    let urlPath = `/pets/{petId}`
    urlPath = urlPath.replace(
      `{${'petId'}}`,
      encodeURIComponent(String(requestParameters['petId'])),
    )

    const response = await this.request(
      {
        path: urlPath,
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * Delete pet
   */
  async deletePetsPetId(
    requestParameters: DeletePetsPetIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<object> {
    const response = await this.deletePetsPetIdRaw(
      requestParameters,
      initOverrides,
    )
    return await response.value()
  }

  /**
   * Get users
   */
  async getPetsRaw(
    requestParameters: GetPetsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<GetPets200ResponseInner>>> {
    const queryParameters: any = {}

    if (requestParameters['limit'] != null) {
      queryParameters['limit'] = requestParameters['limit']
    }

    if (requestParameters['page'] != null) {
      queryParameters['page'] = requestParameters['page']
    }

    const headerParameters: runtime.HTTPHeaders = {}

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['X-RapidAPI-Proxy-Secret'] =
        await this.configuration.apiKey('X-RapidAPI-Proxy-Secret') // RapidAuth authentication
    }

    let urlPath = `/pets`

    const response = await this.request(
      {
        path: urlPath,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      jsonValue.map(GetPets200ResponseInnerFromJSON),
    )
  }

  /**
   * Get users
   */
  async getPets(
    requestParameters: GetPetsRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<GetPets200ResponseInner>> {
    const response = await this.getPetsRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Get pet
   */
  async getPetsPetIdRaw(
    requestParameters: GetPetsPetIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetPets200ResponseInner>> {
    if (requestParameters['petId'] == null) {
      throw new runtime.RequiredError(
        'petId',
        'Required parameter "petId" was null or undefined when calling getPetsPetId().',
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['X-RapidAPI-Proxy-Secret'] =
        await this.configuration.apiKey('X-RapidAPI-Proxy-Secret') // RapidAuth authentication
    }

    let urlPath = `/pets/{petId}`
    urlPath = urlPath.replace(
      `{${'petId'}}`,
      encodeURIComponent(String(requestParameters['petId'])),
    )

    const response = await this.request(
      {
        path: urlPath,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetPets200ResponseInnerFromJSON(jsonValue),
    )
  }

  /**
   * Get pet
   */
  async getPetsPetId(
    requestParameters: GetPetsPetIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetPets200ResponseInner> {
    const response = await this.getPetsPetIdRaw(
      requestParameters,
      initOverrides,
    )
    return await response.value()
  }

  /**
   * Update pet
   */
  async patchPetsPetIdRaw(
    requestParameters: PatchPetsPetIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetPets200ResponseInner>> {
    if (requestParameters['petId'] == null) {
      throw new runtime.RequiredError(
        'petId',
        'Required parameter "petId" was null or undefined when calling patchPetsPetId().',
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['X-RapidAPI-Proxy-Secret'] =
        await this.configuration.apiKey('X-RapidAPI-Proxy-Secret') // RapidAuth authentication
    }

    let urlPath = `/pets/{petId}`
    urlPath = urlPath.replace(
      `{${'petId'}}`,
      encodeURIComponent(String(requestParameters['petId'])),
    )

    const response = await this.request(
      {
        path: urlPath,
        method: 'PATCH',
        headers: headerParameters,
        query: queryParameters,
        body: PostPetsRequestToJSON(requestParameters['postPetsRequest']),
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetPets200ResponseInnerFromJSON(jsonValue),
    )
  }

  /**
   * Update pet
   */
  async patchPetsPetId(
    requestParameters: PatchPetsPetIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetPets200ResponseInner> {
    const response = await this.patchPetsPetIdRaw(
      requestParameters,
      initOverrides,
    )
    return await response.value()
  }

  /**
   * Create pet
   */
  async postPetsRaw(
    requestParameters: PostPetsOperationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetPets200ResponseInner>> {
    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['X-RapidAPI-Proxy-Secret'] =
        await this.configuration.apiKey('X-RapidAPI-Proxy-Secret') // RapidAuth authentication
    }

    let urlPath = `/pets`

    const response = await this.request(
      {
        path: urlPath,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: PostPetsRequestToJSON(requestParameters['postPetsRequest']),
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetPets200ResponseInnerFromJSON(jsonValue),
    )
  }

  /**
   * Create pet
   */
  async postPets(
    requestParameters: PostPetsOperationRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetPets200ResponseInner> {
    const response = await this.postPetsRaw(requestParameters, initOverrides)
    return await response.value()
  }
}
