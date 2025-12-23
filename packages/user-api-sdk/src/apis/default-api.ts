import * as runtime from '../runtime';
import type {
  GetUsers200ResponseInner,
  PostUsersRequest,
} from '../models/index';
import {
    GetUsers200ResponseInnerFromJSON,
    GetUsers200ResponseInnerToJSON,
    PostUsersRequestFromJSON,
    PostUsersRequestToJSON,
} from '../models/index';

export interface DeleteUsersUserIdRequest {
    userId: string;
}

export interface GetUsersRequest {
    limit?: number;
    page?: number;
}

export interface GetUsersUserIdRequest {
    userId: string;
}

export interface PatchUsersUserIdRequest {
    userId: string;
    postUsersRequest?: PostUsersRequest;
}

export interface PostUsersOperationRequest {
    postUsersRequest?: PostUsersRequest;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Delete user
     */
    async deleteUsersUserIdRaw(requestParameters: DeleteUsersUserIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling deleteUsersUserId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-RapidAPI-Proxy-Secret"] = await this.configuration.apiKey("X-RapidAPI-Proxy-Secret"); // RapidAuth authentication
        }


        let urlPath = `/users/{userId}`;
        urlPath = urlPath.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId'])));

        const response = await this.request({
            path: urlPath,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Delete user
     */
    async deleteUsersUserId(requestParameters: DeleteUsersUserIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.deleteUsersUserIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get users
     */
    async getUsersRaw(requestParameters: GetUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetUsers200ResponseInner>>> {
        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-RapidAPI-Proxy-Secret"] = await this.configuration.apiKey("X-RapidAPI-Proxy-Secret"); // RapidAuth authentication
        }


        let urlPath = `/users`;

        const response = await this.request({
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetUsers200ResponseInnerFromJSON));
    }

    /**
     * Get users
     */
    async getUsers(requestParameters: GetUsersRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetUsers200ResponseInner>> {
        const response = await this.getUsersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get user
     */
    async getUsersUserIdRaw(requestParameters: GetUsersUserIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetUsers200ResponseInner>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling getUsersUserId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-RapidAPI-Proxy-Secret"] = await this.configuration.apiKey("X-RapidAPI-Proxy-Secret"); // RapidAuth authentication
        }


        let urlPath = `/users/{userId}`;
        urlPath = urlPath.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId'])));

        const response = await this.request({
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetUsers200ResponseInnerFromJSON(jsonValue));
    }

    /**
     * Get user
     */
    async getUsersUserId(requestParameters: GetUsersUserIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetUsers200ResponseInner> {
        const response = await this.getUsersUserIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update user
     */
    async patchUsersUserIdRaw(requestParameters: PatchUsersUserIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetUsers200ResponseInner>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling patchUsersUserId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-RapidAPI-Proxy-Secret"] = await this.configuration.apiKey("X-RapidAPI-Proxy-Secret"); // RapidAuth authentication
        }


        let urlPath = `/users/{userId}`;
        urlPath = urlPath.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId'])));

        const response = await this.request({
            path: urlPath,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PostUsersRequestToJSON(requestParameters['postUsersRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetUsers200ResponseInnerFromJSON(jsonValue));
    }

    /**
     * Update user
     */
    async patchUsersUserId(requestParameters: PatchUsersUserIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetUsers200ResponseInner> {
        const response = await this.patchUsersUserIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create user
     */
    async postUsersRaw(requestParameters: PostUsersOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetUsers200ResponseInner>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-RapidAPI-Proxy-Secret"] = await this.configuration.apiKey("X-RapidAPI-Proxy-Secret"); // RapidAuth authentication
        }


        let urlPath = `/users`;

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostUsersRequestToJSON(requestParameters['postUsersRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetUsers200ResponseInnerFromJSON(jsonValue));
    }

    /**
     * Create user
     */
    async postUsers(requestParameters: PostUsersOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetUsers200ResponseInner> {
        const response = await this.postUsersRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
