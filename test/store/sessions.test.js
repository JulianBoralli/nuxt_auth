import { createActions } from 'store/sessions.js'
import sessions from 'store/sessions.js'
const { mutations, getters } = sessions

import { context, api } from './helpers.js'

const initialState = () => ({
  auth: null
})

const mockApiResponse = { 
  data:{
    token: 'LpzPSN3Vu6eefxPUXX9QVCU4'
  }
}
const mockSessionsApi = api(mockApiResponse)

const { updateAuth } = mutations
const { isLoggedIn } = getters
const { signUp, signIn } = createActions(mockSessionsApi)

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
      const signUpSpy = jest.spyOn(mockSessionsApi, 'post')
      const formData = {username: 'hiccuphh3', password: 'notpassword' }
      await signUp(context, formData)
      
      expect(signUpSpy).toHaveBeenCalledWith('/signup.json', formData)
      signUpSpy.mockRestore()
    })
    test('commits updateAuth with expected payload', async () => {
      const contextSpy = jest.spyOn(context, 'commit')
      await signUp(context, {})

      expect(contextSpy).toHaveBeenCalledWith('updateAuth', mockApiResponse.data)
      contextSpy.mockRestore()
    })
  })
  describe('signIn', () => {
    test('calls api post method with correct endpoint and form data', async () => {
      const signInSpy = jest.spyOn(mockSessionsApi, 'post')
      const formData = { email: 'hhh3@isleofberk.com', password: 'password' }
      await signIn(context, formData)

      expect(signInSpy).toHaveBeenCalledWith('/login.json', formData)
      signInSpy.mockRestore()
    })
    test('commits updateAuth with expected payload', async () => {
      const contextSpy = jest.spyOn(context, 'commit')
      await signIn(context, {})
      
      expect(contextSpy).toHaveBeenCalledWith('updateAuth', mockApiResponse.data)
      contextSpy.mockRestore()
    })
  })
})
