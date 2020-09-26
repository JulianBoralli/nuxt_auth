<template>
  <div>
    <sign-up-form />
    <sign-in-form />
    <button @click="logOut()">log out</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import SignUpForm from '~/components/SignUpForm.vue'
import SignInForm from '~/components/SignInForm.vue'
export default {
  components: { SignUpForm, SignInForm },
  methods: {
    ...mapActions({
      logOut: 'sessions/logOut'
    })
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    color: $primary;
  }
</style>
