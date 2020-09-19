import sessions from 'store/sessions.js'
import { context, api } from './helpers.js'

const { mutations, getters } = sessions
const { updateUser, updateAuth } = mutations
const { isLoggedIn } = getters

const initialState = () => ({
  user: null,
  auth: {
    headers: null
  }
})

const user = { username: 'Hiccup Horrendous Haddock III' }

const authHeaders = {
  'authorization': 'Bearer "LpzPSN3Vu6eefxPUXX9QVCU4"'
}

describe('sessions module: mutations', () => {
  test('updateUser sets the user property', () => {
    const state = initialState()
    updateUser(state, user)
    expect(state.user).toEqual(user)
  })

  test('updateAuth sets the auth headers', () => {
    const state = initialState()
    updateAuth(state, authHeaders)

    expect(state.auth.headers).toEqual(authHeaders)
  })
})

describe('sessions module: getters', () => {
  test('isLoggedIn returns true if user is set, and false otherwise', () => {
    const state = initialState()
    expect(isLoggedIn(state)).toBe(false)
    
    updateUser(state, user)
    expect(isLoggedIn(state)).toBe(true)
  })
})

describe('sessions module: actions', () => {
  describe('SignUp', () => {
    test('calls api post method with form data', async () => {
      const signUpSpy = jest.spyOn(api, 'post')
      const formData = {...user, password: 'notpassword' }
      await signUp(context, formData)
      
      expect(signUpSpy).toHaveBeenCalledWith(formData)
    })
  })
})
