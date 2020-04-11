<template>
  <div>
    <h1>トップページ</h1>
    <ul>
      <li>
        <nuxt-link to="/user/sign_in">
          ログインページ
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/user">
          ユーザトップページ(未ログイン状態では到達不可)
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
