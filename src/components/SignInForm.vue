<template>
  <div>
    <form @submit.prevent="signIn(form)">
      <input v-model="form.email" type="text" data-field-type="email">
      <input v-model="form.password" type="text" data-field-type="password">
      <button type="submit">SignIn</button>
    </form>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

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
    signIn(formData) {
      console.log('SignIn', formData.email)
      Cookie.set('email',formData.email)
      return formData
    }
  }
}
</script>

<style>

</style>