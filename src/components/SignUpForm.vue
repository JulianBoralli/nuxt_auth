<template>
  <div>
    <form @submit.prevent="signUp(form)"> 
      <div>
        <label>create a username</label>
        <input v-model="form.username" type="text" data-field-type="username">
      </div>
      <div>
        <label>what's your email?</label>
        <input v-model="form.email" type="email" data-field-type="email">
      </div>
      <div>
        <label>create a password</label>
        <input v-model="form.password" type="password" data-field-type="password">
      </div>
      <div>
        <label>confirm your password</label>
        <input v-model="form.passwordConf" type="password" data-field-type="passwordConf">
      </div>
      <div>
        <button type="submit">sign up</button>
      </div>
    </form>
  </div>
</template>

<script>
// think about using mapActions signUp function from sessions module  
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
    signUp(formData) {
      return formData
    }
  }
}
</script>

<style>

</style>