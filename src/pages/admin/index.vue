<template>
  <main>
    <h1>Admin</h1>
    <button @click="logout">Logout</button>
    <button @click="getUser">Get User</button>
  </main>
</template>

<script>
export default {
  middleware: 'notAuthenticated',
  methods: 
  {
    logout() {
      console.log('Logout', document.cookie)
      this.$store.dispatch('authentication/logout')
    },
    getUser() {
      console.log('getUser')
      let userId = this.$store.getters['user/user']
      this.$store.dispatch('user/getUser', userId)
    },
  }
}
</script>

<style lang="scss" scoped>

</style>