/**
 * 全局配置 挂载在Vue
 */

import { judgmentType } from './base';
import store from '@/store';
/**
 * 订阅消息
 * TODO: 成功请求接口 待定
 * @param {Array} idList 订阅的id 数组
 */
const $requestSubscribe = async function (idList: string[]) {
  return new Promise((resolve) => {
    uni.requestSubscribeMessage({
      tmplIds: idList,
      complete: e => {
        resolve('complete');
        $log(e);
      },
      fail: e => {
        if (
          e.errMsg ==
          'requestSubscribeMessage:fail 开发者工具暂时不支持此 API 调试，请使用真机进行开发'
        ) {
          console.log(e);
        } else {
          $alert(e.errMsg);
        }
        resolve('fail');
      },
      success: async (e: any) => {
        idList.forEach(res => {
          if (e[res] === 'ok') {
            //发送api
            // TODO: 逻辑待定
          }
        });
        resolve('success');
      }
    });
  });
};

/**
 *  弹窗提示
 * @param {String} text 文本
 * @param {Number} duration 延长时间
 * @param {'success', 'loading', 'none'} success 状态
 *
 */
type TOptionsIcon = 'success' | 'loading' | 'none' | 'error' | 'fail' | 'exception';
const $alert = (text: string, duration = 3000, success: TOptionsIcon = 'none', opt = {}) => {
  if (judgmentType(text, 'String')) {
    const test = '[\u4e00-\u9fa5]{8}';
    const math = (RegExp(test, 'gm').exec(text) ?? [])[0];
    // console.log(text, test);
    if (math && (math.length > 7)) console.warn('文本最多显示 7 个汉字长度~');
  }

  const defOpt = {
    title: text,
    duration,
    icon: ['success', 'loading'].includes(success) ? success : 'none',
  };

  uni.showToast({ ...defOpt, ...opt });
};

const $loading = (text = '加载中', mask = true) => {
  uni.showLoading({
    title: text,
    mask,
  });
  return uni.hideLoading;
};

const $log = (...args: any[]) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('%c LOG', 'background: #aaa; color: #bada55', ...args);
  }
};

const $login = async (fun: Function) => {
  await uni.login({
    success(e) {
      // 使用 code 换取 openid、unionid、session_key 等信息
      console.log(e, e.code);
      // store.dispatch('getLoginCode', e?.code ?? '');

      if (judgmentType(fun, 'Function')) fun();
    },
    fail(e) {
      console.warn('获取登录凭证失败', e);
      // if (judgmentType(fun, 'Function')) fun();
    },
  });
};

const $checkSession = function () {
  return new Promise((reslove) => {
    uni.checkSession({
      success: async () => {
        // console.log(e);
        if (process.env.NODE_ENV === 'development') {
          await $login(reslove);
        }
      },
      fail: async (e) => {
        console.warn(e);
        // 失效重新获取
        await $login(reslove);
      },
    });
  });
};

// 获取设备信息 ios / android / pc
const $systemInfo = async function () {
  const systemInfo = await uni.getSystemInfoSync();
  store.dispatch('getSystemInfo', systemInfo?.osName ?? '');
  return systemInfo.osName;
};


const defaultConfig = {
  $requestSubscribe,
  $loading,
  $log,
  $alert,
  $checkSession,
  $login,
  $systemInfo,
};
export default defaultConfig;

export type TConfig = typeof defaultConfig;
