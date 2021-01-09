const Cookie = {
  get: (cname, cookie = document.cookie) => {  
    let name = cname + '='
    let ca = cookie.split(';')
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) == ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ''
  },
  set: (name, value, exDays = '') => {
    if (exDays) {
      let date = new Date()
      date.setTime(date.getTime() + (exDays*24*60*60*1000))
      let expires = 'expires='+ date.toUTCString()
      document.cookie = name + '=' + value + ';' + expires + '; path=/;'
    } else {
      document.cookie = name + '=' + value + '; path=/;'
    }
  },
  remove: (name) => {
    document.cookie = name +'=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  },
  getFromHttpRequest: (name, req) => {
    let token = Cookie.get(name, req.headers.cookie)
    console.log('getToken', token)
    return token
  }
}

export default Cookie
