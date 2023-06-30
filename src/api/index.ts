import HttpMethod from './config/method';

export default abstract class {
  defaultHttp = new HttpMethod({baseURL: 'https://mock.mengxuegu.com/mock/629d727e6163854a32e8307e/geeker/menu/'});

  // biHttp = new HttpMethod({baseURL: 'xxxx'});
}
// httpClient.get('list', {}, {loading: true}).then(res => {
//   console.log(res);
// });
