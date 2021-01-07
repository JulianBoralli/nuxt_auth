const routes = {
  extendRoutes(routes, resolve) {
    routes.push({
      name: 'signIn',
      path: '/signin',  
      component: resolve(__dirname, '../pages/authentication/signIn.vue')
    })
    routes.push({
      name: 'signUp',
      path: '/signup',  
      component: resolve(__dirname, '../pages/authentication/signUp.vue')
    })
  }
}

export default routes