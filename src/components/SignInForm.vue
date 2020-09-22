<template>
  <div>
    <form @submit.prevent="signIn(form)">
      <input v-model="form.email" type="text" data-field-type="email">
      <input v-model="form.password" type="text" data-field-type="password">
      <button type="submit"></button>
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
    // signIn(formData) {
    //   return formData
    // }
  }
}
</script>

<style>

</style>