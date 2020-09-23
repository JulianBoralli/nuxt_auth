<template>
  <sign-in-form />
</template>

<script>
import SignInForm from '~/components/SignInForm.vue'

export default {
  components: { SignInForm }
}
</script>

<style lang="scss" scoped>
  h1 {
    color: $primary;
  }
</style>
