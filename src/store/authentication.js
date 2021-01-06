const state = () => ({
  token: null
})

const mutations = {
  updateToken(state, token) {
    state.token = token
  }
}

const actions = {
  getToken(context, req) {
    if (req.headers.cookie) {
      let token = req.headers.cookie.split('=')[1]
      console.log('getToken', token)
      this.$railsAuthApi.defaults.headers.common['Authorization'] = 'Bearer ' + context.commit('updateToken', token)
    } 
  },

  signUp({commit}, form) {
    this.$railsAuthApi.post('signup', form)
      .then(r => commit('updateToken', r.data))
      .catch(e => e)
  },

  async signIn({commit}, form) {
    try {
      let response = await this.$railsAuthApi.post('login.json', form)
      console.log('signIn Response', response.data)
      this.$railsAuthApi.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token
      commit('updateToken', response.data.token)
      document.cookie = 'token=' + response.data.token
    } catch (error) {
      console.log('signIn Error', error)
      console.log(commit)
    }
  },
  async logout({commit}) {
    try {
      let response = await this.$railsAuthApi.delete('logout.json')
      console.log('logout Response', response.data)
      this.$railsAuthApi.defaults.headers.common['Authorization'] = 'Bearer ' + ' '
      commit('updateToken', null)
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    } catch (error) {
      console.log('logout Error', error)
      console.log(commit)
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
