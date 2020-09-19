const initialState = () => ({
  user: null,
  auth: {
    headers: null
  }
})


const mutations = {
  updateUser(state, user) {
    state.user = user
  },

  updateAuth(state, authHeaders) {
    state.auth.headers = authHeaders
  }
}

const getters = {
  isLoggedIn: state => !!state.user,
  authHeaders: state => state.auth.headers
}

export default {
  state: initialState,
  mutations,
  getters
}
