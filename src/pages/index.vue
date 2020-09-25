<template>
  <main>
    <h1>Hello Nuxt Auth</h1>
    <app-sign-in-form></app-sign-in-form>
    <button @click="logout">Logout</button>
    <button @click="testCallStore">testCallStore</button>
    <button @click="testCallComponent">testCallComponent</button>
  </main>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

import SignInForm from '@/components/SignInForm'

export default {
  components: {
    appSignInForm: SignInForm,
  },
  methods: {
    logout() {
      console.log('Logout')
      Cookie.remove('email')
    },
    testCallStore() {
      console.log('testCallStore Click')
      this.$store.dispatch('sessions/testCall')
    },
    testCallComponent() {
      console.log('testCallComponent Click')
      this.$railsAuthApi.get('')
        .then(r => console.log('testCallComponent Response', r))
        .catch(e => console.log('testCallComponent Error', e))
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color: $primary;
}
</style>
