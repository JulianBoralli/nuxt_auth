export const context = {
  commit: (type, payload) => `${type}: ${payload}`,
  state: {
    user: null,
    auth: {
      headers: null
    }
  },
  rootState: {
    sessions: {
      user: null, 
      auth: {
        headers: null
      }
    }
  }
}

export const api = r => ({
  $post: () => Promise.resolve(r),
  $get: () => Promise.resolve(r),
})
