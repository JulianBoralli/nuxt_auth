
const state = () => ({
  user: null
})

const mutations = {
  updateUser(state, user) {
    state.user = user
  }
}

const actions = {
  async getUser({state}) {
    try {
      console.log('State', state.user)
      let url = 'users/' + state.user
      let response = await this.$railsAuthApi.get(url)
      console.log('getUser Response', response.data)
    } catch (error) {
      console.log('getUser Error', error)
    }
  },
}


const getters = {
  user: state => state.user
}

export default {
  state,
  mutations,
  getters,
  actions
}
