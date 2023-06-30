import { Module } from 'vuex';

interface IState {
  loginCode?: string;
}

export default {
  namespaced: true,
  state: {
    loginCode: 'undefined',
  },
  getters: {},
  mutations: {
    setLoginCode(state, data) {
      state.loginCode = data;
      console.log(123, data);
      uni.setStorageSync('loginCode', data);
    }
  },
  actions: {
    /**
     * 微信code 可换取openId
     */
    getLoginCode({commit}, data) {
      commit('setLoginCode', data);
    },
  },
} as Module<IState, object>;
