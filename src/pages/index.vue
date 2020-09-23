<template>
  <main>
    <h1>Hello Nuxt Auth</h1>
    <app-sign-in-form></app-sign-in-form>
    <button @click="logout">Logout</button>
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
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color: $primary;
}
</style>
