const initialState = () => ({
  auth: null
})  

const mutations = {
  updateAuth(state, authObj) {
    state.auth = authObj
    // set header
    this.$http.setToken(state.auth.token, 'Bearer')
    // set cookie?
  },
  clearSession(state) {
    state.auth = null
    // clear header
    this.$http.setToken(false)
  }
}

const actions = {
  signUp({commit}, form) {
    this.$http.$post('/signup.json', form)
      .then(r => commit('updateAuth', r))
      .catch(e => e)
  },
  signIn({commit}, form) {
    this.$http.$post('/login.json', form)
      .then(r => commit('updateAuth', r))
      .catch(e => e)
  },
  logOut({commit}) {
    this.$http.$delete('/logout.json')
      .then(() => commit('clearSession'))
      .catch(e => e)
  }
}

const getters = {
  isLoggedIn: state => !!state.auth,
  auth: state => state.auth
}

export default {
  state: initialState,
  mutations,
  actions,
  getters
}
