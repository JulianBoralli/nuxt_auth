import Cookie from '../lib/cookie'

const state = () => ({
  token: null
})

const mutations = {
  updateToken(state, token) {
    state.token = token
  }
}

const actions = {
  // getToken runs only on the server and is initiated by nuxtServerInit
  async getToken({commit}, req) {
    if (req.headers.cookie) {
      let token = Cookie.getFromHttpRequest('token', req)
      try {
        commit('updateToken', token)
        this.$railsAuthApi.defaults.headers.common['Authorization'] = 'Bearer ' + token
      } catch (error) {
        console.log('getToken Error', error)
      }
    } 
  },

  async validateAccess({state, commit}) {
    if (state.token) {
      try {
        let response = await this.$railsAuthApi.get('validate_access')
        commit('user/updateUser', response.data.id, { root: true })
      } catch (error) {
        console.log('signUp Error', error)
      }
    }
  },

  async signUp({commit}, form) {
    try {
      let response = await this.$railsAuthApi.post('signup', form)
      console.log('signUp Response', response.data)
      this.$railsAuthApi.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token
      commit('updateToken', response.data.token)
      commit('user/updateUser', response.data.id, { root: true })
      Cookie.set('token', response.data.token)
      // document.cookie = 'token=' + response.data.token
      this.$router.push('/')
    } catch (error) {
      console.log('signUp Error', error)
    }
  },

  async signIn({commit}, form) {
    try {
      let response = await this.$railsAuthApi.post('login', form)
      console.log('signIn Response', response.data)
      this.$railsAuthApi.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token
      commit('updateToken', response.data.token)
      commit('user/updateUser', response.data.id, { root: true })
      Cookie.set('token', response.data.token)
      // document.cookie = 'token=' + response.data.token
      this.$router.push('/')
    } catch (error) {
      console.log('signIn Error', error)
    }
  },
  async logout({commit}) {
    try {
      let response = await this.$railsAuthApi.delete('logout')
      console.log('logout Response', response.data)
      commit('updateToken', null)
      commit('user/updateUser', null, { root: true })
      Cookie.remove('token')
      // document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      this.$router.push('/')
    } catch (error) {
      console.log('logout Error', error)
    }
  },


}


const getters = {
  isLoggedIn: state => !!state.token,
  token: state => state.token
}

export default {
  state,
  mutations,
  getters,
  actions
}
