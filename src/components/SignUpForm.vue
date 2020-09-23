<template>
  <div>
    <form @submit.prevent="signUp(form)"> 
      <section>
        <label for="username">create a username</label>
        <input
          id="username"
          v-model="form.username"
          type="text"
          data-field-type="username"
        >
      </section>
      <section>
        <label for="email">what's your email?</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          data-field-type="email"
        >
      </section>
      <section>
        <label for="password">create a password</label>
        <input
          id="password"
          v-model="form.password"
          type="password"
          data-field-type="password"
        >
      </section>
      <section>
        <label for="password-conf">confirm your password</label>
        <input
          id="password-conf"
          v-model="form.passwordConf"
          type="password"
          data-field-type="passwordConf"
        >
      </section>
      <button type="submit">sign up</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex' 

export default {
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: '',
        passwordConf: ''
      }
    }
  },
  methods: {
    ...mapActions({ signUp: 'sessions/signUp'})  
  }
}
</script>

<style>

</style>
