const axios = require('axios')

export default (context, inject) => {
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:3000/v1/',
  })

  inject('railsAuthApi', instance)
}