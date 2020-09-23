import { context, api } from './helpers.js'
import sessions from 'store/sessions.js'
const { mutations, actions, getters } = sessions

const mockApiResponse = { 
  data:{
    token: 'LpzPSN3Vu6eefxPUXX9QVCU4'
  }
}

// mock $http dependency
const mockApi = api(mockApiResponse)
actions.$http = mockApi

const initialState = () => ({
  auth: null
})

const { updateAuth } = mutations
const { isLoggedIn } = getters
// const { signUp, signIn } = actions


describe('sessions module: mutations', () => {
  test('updateAuth sets the auth prop', () => {
    const state = initialState()
    updateAuth(state, mockApiResponse.data)

    expect(state.auth).toEqual(mockApiResponse.data)
  })
})

describe('sessions module: getters', () => {
  test('isLoggedIn returns true if auth is set, and false otherwise', () => {
    const state = initialState()
    expect(isLoggedIn(state)).toBe(false)
    
    updateAuth(state, mockApiResponse.data)
    expect(isLoggedIn(state)).toBe(true)
  })
})

describe('sessions module: actions', () => {
  describe('signUp', () => {
    test('calls api post method with correct endpoint and form data', async () => {
      const signUpSpy = jest.spyOn(actions.$http, '$post')
      const formData = {username: 'hiccuphh3', password: 'notpassword' }
      await actions.signUp(context, formData)
      
      expect(signUpSpy).toHaveBeenCalledWith('/signup.json', formData)
      signUpSpy.mockRestore()
    })
    test('commits updateAuth with expected payload', async () => {
      const contextSpy = jest.spyOn(context, 'commit')
      await actions.signUp(context, {})

      expect(contextSpy).toHaveBeenCalledWith('updateAuth', mockApiResponse.data)
      contextSpy.mockRestore()
    })
  })
  describe('signIn', () => {
    test('calls api post method with correct endpoint and form data', async () => {
      const signInSpy = jest.spyOn(actions.$http, '$post')
      const formData = { email: 'hhh3@isleofberk.com', password: 'password' }
      await actions.signIn(context, formData)

      expect(signInSpy).toHaveBeenCalledWith('/login.json', formData)
      signInSpy.mockRestore()
    })
    test('commits updateAuth with expected payload', async () => {
      const contextSpy = jest.spyOn(context, 'commit')
      await actions.signIn(context, {})
      
      expect(contextSpy).toHaveBeenCalledWith('updateAuth', mockApiResponse.data)
      contextSpy.mockRestore()
    })
  })
})
