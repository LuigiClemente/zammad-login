import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export class HTTPClient {
  public static instance: HTTPClient
  public client: AxiosInstance

  private constructor() {
    const configs: AxiosRequestConfig = {
      baseURL: `${process.env.NEXT_PUBLIC_ZAMMAD_HOST}/api/v1/`,
      timeout: 15000,
      responseType: 'json',
    }
    this.client = axios.create(configs)
  }

  public static getInstance(): HTTPClient {
    if (!HTTPClient.instance) {
      HTTPClient.instance = new HTTPClient()
    }
    return HTTPClient.instance
  }
}
