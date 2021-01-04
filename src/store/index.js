
export const state = () => ({
  auth: null
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}

export const actions = {
  nuxtServerInit({ dispatch }, { req }  ) {
    dispatch('authentication/getToken', req)
  }
}