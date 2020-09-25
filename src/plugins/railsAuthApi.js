const axios = require('axios')

export default (context, inject) => {
  console.log('Inject', context)
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:3000/'
  })

  inject('railsAuthApi', instance)
}