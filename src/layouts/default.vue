<template>
  <Nuxt />
</template>

<script>
export default {
  mounted() {
    console.log('Layout Mounted')
    this.$store.dispatch('authentication/validateAccess')
  }
}
</script>

<style lang="scss" scoped>

</style>