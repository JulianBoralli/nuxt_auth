import sessions from 'store/sessions.js'
const { mutations } = sessions
const { updateUser, updateAuth } = mutations

const initialState = () => ({
  user: null,
  auth: {
    isLoggedIn: false,
    headers: null
  }
})

const user = { username: 'Hiccup Horrendous Haddock III' }

const authHeaders = {
  'authorization': 'Bearer "LpzPSN3Vu6eefxPUXX9QVCU4"'
}

describe('sessions module: mutations', () => {
  test('updateUser mutates the user property', () => {
    const state = initialState()
    updateUser(state, user)
    expect(state.user).toEqual(user)
  })

  test('updateAuth mutates the auth headers and sets the isLoggedIn prop', () => {
    const state = initialState()
    updateAuth(state, authHeaders)

    expect(state.auth.headers).toEqual(authHeaders)
    expect(state.auth.isLoggedIn).toBe(true)
  })
})
