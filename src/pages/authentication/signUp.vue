<template>
  <main>
    <h1>SignUp</h1>
    <app-sign-up-form></app-sign-up-form>
    <button @click="logout">Logout</button>
  </main>
</template>

<script>
import SignUpForm from '@/components/SignUpForm'

export default {
  components: {
    appSignUpForm: SignUpForm,
  },
  middleware: 'authenticated',
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
