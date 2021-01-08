const axios = require('axios')

export default (context, inject) => {

  // 2 different instances will be created, one for the server and the other for the client
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:3000/v1/',
  })

  // Assures the client instance has the token
  if (process.client) {
    instance.defaults.headers.common['Authorization'] = 'Bearer ' + context.store.getters['authentication/token']
  }

  instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.url = config.url + '.json'
    console.log('Request Interceptor', config)
    return config
  }, function (error) {
    // Do something with request error
    console.log('Request Interceptor Error', error)
    return Promise.reject(error)
  })

  instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('Response Interceptor OK', response)
    return response
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log('Response Interceptor Error', error)
    if (error.response.status === 401) {
      console.log('Mutation', context.store)
      context.store.commit('authentication/updateToken', null)
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      context.redirect('/error/401')
    }
    return Promise.reject(error)
  })

  inject('railsAuthApi', instance)
}