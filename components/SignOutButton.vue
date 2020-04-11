<template>
  <button @click="signOut">
    ログアウト
  </button>
</template>

<script>
export default {
  methods: {
    async signOut () {
      await this.$axios.$delete('/api/user/session')

      this.$router.replace('/user/sign_in')
    }
  }
}
</script>
