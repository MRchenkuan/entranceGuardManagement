/**
 * Created by chenkuan on 2017/5/31.
 */
/**
 * Created by chenkuan on 2017/4/10.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import { Message } from 'element-ui'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    communityId: 123,
    houseCreator: null,
    ownerCreator: null,
    guardCreator: null,
    areasCreator: null
  },
  mutations: {
    openHouseCreator (state) {
      if (!state.houseCreator) {
        Message({
          message: '房屋创建面板初始化失败！',
          type: 'error',
          duration: 2000
        })
        return false
      }
      state.houseCreator.open()
    },
    openOwnerCreator (state) {
      if (!state.ownerCreator) {
        Message({
          message: '住户创建面板初始化失败！',
          type: 'error',
          duration: 2000
        })
        return false
      }
      state.ownerCreator.open()
    },
    openGuardCreator (state) {
      if (!state.guardCreator) {
        Message({
          message: '住户创建面板初始化失败！',
          type: 'error',
          duration: 2000
        })
        return false
      }
      state.guardCreator.open()
    },
    openAreaCreator (state) {
      if (!state.areasCreator) {
        Message({
          message: '区域楼栋创建面板初始化失败！',
          type: 'error',
          duration: 2000
        })
        return false
      }
      state.areasCreator.open()
    }
  },
  actions: {
    createHouse (context) {
      context.commit('openHouseCreator')
    },
    createOwner (context) {
      context.commit('openOwnerCreator')
    },
    createGuard (context) {
      context.commit('openGuardCreator')
    },
    createAreas (context) {
      context.commit('openAreaCreator')
    }
  },
  getters: {
    communityId (state) {
      return state.communityId
    }
  }
})

export default store
