<template>
  <div>
    <form @submit.prevent="signIn(form)">
      <section>
        <label for="email">email</label>
        <input
          id="email"
          v-model="form.email"
          type="text"
          data-field-type="email"
        >
      </section>
      <section>
        <label for="password">password</label>
        <input
          id="password"
          v-model="form.password"
          type="password"
          data-field-type="password"
        >
      </section>
      <button type="submit">sign in</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex' 

export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      signIn: 'sessions/signIn'
    })
  }
}
</script>

<style>

</style>
