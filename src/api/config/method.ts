import { FlyError, FlyRequestConfig, FlyResponse } from 'flyio';
import FlyRequest, { IConfig } from './request';

interface IOptions {
  loading?: boolean,
  showMask?: boolean,
  hideErrorToast?: boolean;
}

export default class extends FlyRequest {

  constructor(config: IConfig) {
    super(config);

    this.http.interceptors.request.use(function (requestConfig: FlyRequestConfig & IOptions) {
      console.log('request', requestConfig);

      // TODO: token
      // requestConfig.headers['Authorization'] = `Bearer ${}`;

      if (requestConfig.loading) {
        uni.showLoading({
          title: '加载中...',
          mask: requestConfig.showMask
        });
      }
      return requestConfig;
    });

    this.http.interceptors.response.use(
      function (responseConfig: FlyResponse & { request: IOptions }) {
        console.log('response', responseConfig);
        const { data, request } = responseConfig;

        if (request.loading) uni.hideLoading();

        switch (data.code) {
        case 200:
          return Promise.resolve(data);
        case 401:
          // TODO: 清除用户状态 待定
          // console.log(1);
          if (!request.hideErrorToast) {
            uni.showToast({
              title: data?.msg ?? data.message,
              icon: 'none',
              duration: 2000
            });
          }
          break;
        default:
          if (!request.hideErrorToast) {
            uni.showToast({
              title: data?.msg ?? data.message,
              icon: 'none',
              duration: 2000
            });
          }
          break;
        }
        // catch
        return Promise.reject(data);
      },
      function (error: any & FlyError & { request: IOptions }) {
        if (!error.request.hideErrorToast) {
          uni.showToast({
            title: error.message,
            icon: 'none',
            duration: 2000
          });
          return Promise.reject(error);
        }
      },
    );
  }
}
