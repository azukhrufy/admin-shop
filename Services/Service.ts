import { AxiosInstance, AxiosRequestConfig } from "axios";
import { axiosInstance } from "./Axios";

type Callback = (status: number, data: any, isDone?: boolean) => any;

export type Response = { status: number; data: any };

export class Service {
  private service: AxiosInstance;
  constructor(private url: string, private getAuth? : Function) {
    this.service = axiosInstance;
  }

  public getAxiosInstance() {
    return this.service;
  }

  private async auth() {
    if(this.getAuth){
        let auth = await this.getAuth();
    return auth
      ? {
          Authorization: `${auth.token_type} ${auth.access_token}`,
        }
      : null;
    }
  }

  protected response(status: number, data: any): Response {
    return {
      status,
      data,
    };
  }

  protected async get(
    path: string,
    callback: Callback,
    config?: AxiosRequestConfig
  ) {
    return await this.service
      .get(`${this.url}${path}`, {
        headers: { ...(await this.auth()) },
        ...config,
      })
      .then((response) => callback(response.status, response.data));
  }

  protected async patch(
    path: string,
    payload: any,
    callback: Callback,
    config?: AxiosRequestConfig
  ) {
    return await this.service
      .request({
        method: "PATCH",
        url: `${this.url}${path}`,
        responseType: "json",
        data: payload,
        headers: {
          ...(await this.auth()),
        },
        ...config,
      })
      .then((response) => callback(response.status, response.data));
  }

  protected async put(
    path: string,
    payload: any,
    callback: Callback,
    config?: AxiosRequestConfig
  ) {
    return await this.service
      .request({
        method: "PUT",
        url: `${this.url}${path}`,
        responseType: "json",
        data: payload,
        headers: {
          ...(await this.auth()),
        },
        ...config,
      })
      .then((response) => callback(response.status, response.data));
  }

  protected async post(
    path: string,
    payload: any,
    callback: Callback,
    config?: AxiosRequestConfig
  ) {
    return await this.service
      .request({
        method: "POST",
        url: `${this.url}${path}`,
        responseType: "json",
        data: payload,
        ...{
          ...config,
          headers: {
            ...(await this.auth()),
            ...config?.headers,
          },
        },
      })
      .then((response) => callback(response.status, response.data));
  }

  protected async delete(
    path: string,
    payload: any,
    callback: Callback,
    config?: AxiosRequestConfig
  ) {
    return this.service
      .request({
        method: "DELETE",
        url: `${this.url}${path}`,
        responseType: "json",
        data: payload,
        headers: {
          ...(await this.auth()),
        },
        ...config,
      })
      .then((response) => callback(response.status, response.data));
  }

  protected catch(err: any) {
    console.log(err);
    return err.response;
  }
}