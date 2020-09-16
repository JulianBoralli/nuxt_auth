const mutations = {
  updateUser(state, user) {
    state.user = user
  },

  updateAuth(state, authHeaders) {
    state.auth.headers = authHeaders
    if (!state.auth.isLoggedIn) { state.auth.isLoggedIn = true }
  }
}

export default {
  mutations
}
