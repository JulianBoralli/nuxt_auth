import { context, api } from './helpers.js'
import sessions from 'store/sessions.js'
const { mutations, actions, getters } = sessions

const mockApiResponse = { 
  data:{
    token: 'LpzPSN3Vu6eefxPUXX9QVCU4'
  }
}

const mockApi = api(mockApiResponse)

const initialState = () => ({
  auth: null
})

const { isLoggedIn } = getters

let state
beforeEach(() => {
  state = initialState()
}) 

describe('sessions module: mutations', () => {
  // mock $http dependency
  mutations.$http = mockApi

  test('updateAuth sets the auth prop', () => {
    mutations.updateAuth(state, mockApiResponse.data)

    expect(state.auth).toEqual(mockApiResponse.data)
  })
  test('updateAuth sets authorization headers with auth token', () => {
    const setTokenSpy = jest.spyOn(mutations.$http, 'setToken')
    mutations.updateAuth(state, mockApiResponse.data)

    expect(setTokenSpy).toHaveBeenCalledWith(state.auth.token, 'Bearer')
  })
})

describe('sessions module: getters', () => {
  test('isLoggedIn returns true if auth is set, and false otherwise', () => {
    expect(isLoggedIn(state)).toBe(false)
    
    mutations.updateAuth(state, mockApiResponse.data)
    expect(isLoggedIn(state)).toBe(true)
  })
})

describe('sessions module: actions', () => {
  // mock $http dependency
  actions.$http = mockApi

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
