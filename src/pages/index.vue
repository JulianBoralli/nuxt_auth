<template>
  <main>
    <h1>Hello Nuxt Auth</h1>
    <template v-if="isLoggedIn"> 
      <button>  <NuxtLink to="/admin">Admin Page</NuxtLink></button>
      <button @click="logout">Logout</button>
    </template>
    <template v-else> 
      <button>  <NuxtLink to="/signin">SignIn Page</NuxtLink></button>
      <button>  <NuxtLink to="/signup">SignUp Page</NuxtLink></button>
    </template>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
  },
  data() {
    return {
      counter: 0
    }
  },
  computed: {
    ...mapGetters('authentication', [
      'isLoggedIn'
    ])
  },

  methods: {
    logout() {
      console.log('Logout', document.cookie)
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
