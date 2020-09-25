const initialState = () => ({
  auth: null
})  

const mutations = {
  updateAuth(state, authObj) {
    state.auth = authObj
  }
}

const actions = {
  signUp({commit}, form) {
    this.$railsAuthApi.post('signup', form)
      .then(r => commit('updateAuth', r.data))
      .catch(e => e)
  },
  signIn({commit}, form) {
    this.$railsAuthApi.post('login', form)
      .then(r => commit('updateAuth', r.data))
      .catch(e => e)
  },
  testCall() {
    this.$railsAuthApi.get('')
      .then(r => console.log('testCallStore Response', r))
      .catch(e => console.log('testCallStore Error', e))
  }
}

const getters = {
  isLoggedIn: state => !!state.auth,
  auth: state => state.auth
}

export default {
  state: initialState,
  mutations,
  getters,
  actions
}
