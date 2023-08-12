export interface ResponseData {
  statusCode: number;
  statusMessage: string;
  message?: string;
  data?: Object | Array<any>;
  errors?: Object | Array<any> | string;
}
