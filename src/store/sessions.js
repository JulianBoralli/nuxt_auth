const initialState = () => ({
  auth: null
})  

const mutations = {
  updateAuth(state, authObj) {
    state.auth = authObj
  }
}

export const actions = (api) => ({
  signUp({commit}, form) {
    api.post(form)
      .then(r => commit('updateAuth', r.data))
      .catch(e => e)
  },
  signIn({commit}, form) {
    api.post(form)
      .then(r => commit('updateAuth', r.data))
      .catch(e => e)
  }
})

const getters = {
  isLoggedIn: state => !!state.auth,
  auth: state => state.auth
}

export default {
  state: initialState,
  mutations,
  getters
}
