<template>
  <main>
    <h1>SignIn</h1>
    <app-sign-in-form></app-sign-in-form>
    <h1>SignUp</h1>
    <app-sign-up-form></app-sign-up-form>
    <button @click="logout">Logout</button>
  </main>
</template>

<script>
import SignInForm from '@/components/SignInForm'
import SignUpForm from '@/components/SignUpForm'

export default {
  components: {
    appSignInForm: SignInForm,
    appSignUpForm: SignUpForm,
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
