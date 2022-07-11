import { API_URLS, AvailableMethods, FetchMethods } from "./enums";
import {
  TopicsList,
  ResponseThread,
  ResponseLogin,
  ResponseVerify,
  Response,
  TokenRefreshResponse,
} from "./interfaces";

class ForumAPI {
  BASE_URL = API_URLS.BASE_URL;

//   setAuthorization(): Object {
//     const actualAccessToken: string = localStorage.access;
//     return { Authorization: `Bearer ${actualAccessToken}` };
//   }

  async get({
    method,
    params,
  }: {
    method: AvailableMethods;
    params: object | null;
  }): Promise<Response<any>> {
    let parsedParams: string = "?";
    if (params) {
      for (let paramsKey in params) {
        // @ts-ignore
        parsedParams += `${paramsKey}=${params[paramsKey]}`;
      }
    }

    const response = await fetch(`${this.BASE_URL}/${method}${parsedParams}`);

    return { ok: response.ok, response: await response.json() };
  }

  async post({
    method,
    data,
    headers = {},
  }: {
    method: AvailableMethods;
    data: Object;
    headers?: Object;
  }): Promise<Response<any>> {
    const headers_query = {
      "Content-Type": "application/json",
    };
    // @ts-ignore
    for (let [key, val] in headers) {
      // @ts-ignore
      headers_query[key] = val;
    }

    const response = await fetch(`${this.BASE_URL}/${method}`, {
      method: FetchMethods.POST,

      headers: headers_query,
      body: JSON.stringify(data),
    });
    return { ok: response.ok, response: await response.json() };
  }

  async getTopicsList(): Promise<Response<TopicsList[]>> {
    return await this.get({
      method: AvailableMethods.GetTopicList,
      params: null,
    });
  }

  async getThread(thread_id: number): Promise<Response<ResponseThread>> {
    return await this.get({
      method: AvailableMethods.GetThread,
      params: { idx: thread_id },
    });
  }

  // Login and Update

  async loginUser({username, password} : { username: string; password: string }): Promise<Response<ResponseLogin>> {
    return await this.post({
      method: AvailableMethods.Login,
      data: { username, password },
    });
  }

  async getAccessTokenByRefresh({refresh} : {refresh: string}): Promise<Response<TokenRefreshResponse>> {
    return await this.post({
      method: AvailableMethods.RefreshToken,
      data: { refresh },
    });
  }

  async checkLogged({access} : {access: string}): Promise<boolean> {
    const r: Response<ResponseVerify> = await this.post({
      method: AvailableMethods.VerifyToken,
      data: { token: access },
    });

    if (r.ok) {
      return true;
    }

    return false;
  }

  async sendMessage({access, topicId, messageText}: {access: string, topicId: number, messageText: string}): Promise<boolean> {
      const response = await this.post({method: AvailableMethods.CreateMessage, data: {messageText, topicId}, headers: {"Authorization": `Bearer ${access}`}})
    return response.ok
  }
}

export default new ForumAPI();
