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

  instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('Interceptor OK', response)
    return response
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log('Interceptor Error', error)
    context.redirect('/error/401'  )
    return Promise.reject(error)
  })

  inject('railsAuthApi', instance)
}