<template>
  <main>
    <h1>SignIn</h1>
    <app-sign-in-form></app-sign-in-form>
    <button @click="logout">Logout</button>
  </main>
</template>

<script>
import SignInForm from '@/components/SignInForm'

export default {
  components: {
    appSignInForm: SignInForm,
  },
  methods: {
    logout() {
      this.$store.dispatch('authentication/logout')
    },
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color: $primary;
}
</style>
