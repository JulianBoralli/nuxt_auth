const axios = require('axios')

export default (context, inject) => {

  // 2 different instances will be created, one on the server and the other on the client
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:3000/v1/',
  })

  if (process.client) {
    console.log('railsAuthApi Context', context.store.getters['authentication/token'])
    instance.defaults.headers.common['Authorization'] = 'Bearer ' + context.store.getters['authentication/token']
  }

  inject('railsAuthApi', instance)
  console.log('railsAuthApi Instance', instance.defaults.headers.common)
}