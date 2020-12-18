import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginStatus: false,
    avatar: '',
    gender:'',
    user: {
      id: 1,
      phone: '19827063716',
      password:'78b50cdecafdf97014e854662da05d7c',
      nickname: '孟听',
      avatar: 'http://bnnbucket.oss-cn-hangzhou.aliyuncs.com/avatar/tou.jpg',
      gender: '0',
      birthday: '2001-9-16',
      address: '江苏省盐城市盐都区',
      banner: 'http://bnnbucket.oss-cn-hangzhou.aliyuncs.com/avatar/bg.jpg',
      signature:'彼岸花开 | 开到茶靡',
      createTime: '2020-12-08 17:25:14'
    }
  },
  getters: {},
  mutations: {
    // 登录成功后，用户数据存入本地存储
    login(state, user) {
      state.loginStatus = true
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },
    // 退出登录
    logout(state) {
      state.loginStatus = false
      state.user = {}
      localStorage.removeItem('user')
    }
  },
  actions: {}
})
