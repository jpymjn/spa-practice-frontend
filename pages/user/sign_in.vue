<template>
  <div>
    <h1>ログインページ</h1>
    <ul>
      <li><GoogleSignInButton /></li>
      <li>
        <nuxt-link to="/user">
          ユーザトップページ(未ログイン状態では到達不可)
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import GoogleSignInButton from '~/components/GoogleSignInButton.vue'

export default {
  components: {
    GoogleSignInButton
  }
}
</script>
