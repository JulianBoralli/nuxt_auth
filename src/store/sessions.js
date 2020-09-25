const initialState = () => ({
  auth: null
})  

const mutations = {
  updateAuth(state, authObj) {
    // set state
    state.auth = authObj
    // set header
    // set cookie
  }
}

const actions = {
  signUp({commit}, form) {
    this.$http.$post('/signup.json', form)
      .then(r => commit('updateAuth', r.data))
      .catch(e => e)
  },
  signIn({commit}, form) {
    this.$http.$post('/login.json', form)
      .then(r => commit('updateAuth', r.data))
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
