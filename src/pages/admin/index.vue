<template>
  <main>
    <h1>Admin</h1>
    <button @click="logout">Logout</button>
  </main>
</template>

<script>
export default {
  methods: 
  {
    logout() {
      console.log('Logout', document.cookie)
      this.$store.dispatch('authentication/logout')
    },
  }
}
</script>

<style lang="scss" scoped>

</style>