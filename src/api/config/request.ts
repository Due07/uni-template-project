import { FlyPromise, Fly } from 'flyio';
import Flyio from 'flyio/dist/npm/wx';

export interface IConfig {
  baseURL: string;
}

type TMethod = 'post' | 'delete' | 'get' | 'put';

export default class FlyRequest {
  protected http: Fly;

  // TODO: any 待定， 看数据返回类型
  get!: (url: string, data: object, option: object) => FlyPromise<any>;
  post!: (url: string, data: object, option: object) => FlyPromise<any>;
  put!: (url: string, data: object, option: object) => FlyPromise<any>;
  delete!: (url: string, data: object, option: object) => FlyPromise<any>;

  constructor(config: IConfig) {
    this.http = new Flyio();
    Object.assign(
      this.http.config,
      config,
      {headers: {'content-type': 'application/json'}},
    );

    (['post', 'delete', 'get', 'put'] as TMethod[]).forEach((item) => {
      this[item] = (url, data, option) => {
        return this.http[item](url, data, option);
      };
    });
  }
}


