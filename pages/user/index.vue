<template>
  <div>
    <h1>ユーザトップページ</h1>
    <ul>
      <li><SignOutButton /></li>
      <li>
        <nuxt-link to="/user/sign_in">
          ログインページ(ログイン状態では到達不可)
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import SignOutButton from '~/components/SignOutButton.vue'

export default {
  components: {
    SignOutButton
  }
}
</script>
