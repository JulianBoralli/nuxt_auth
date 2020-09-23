export const state = () => ({
  counter: 0,
})

export const mutations = {
  increment(state) {
    state.counter++
  },
}

export const actions = {
  getToken(context, req) {
    if (req.headers.cookie) {
      console.log('getToken', req.headers.cookie)
    }
  }
}
