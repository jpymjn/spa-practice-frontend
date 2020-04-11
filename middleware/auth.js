const TOP_PATH = '/'
const WHITE_LIST_PATHS = [
  TOP_PATH
]
const USER_SIGN_IN_PATH = '/user/sign_in'
const USER_PATH = '/user'

export default async ({ $axios, route, redirect }) => {
  // WHITE_LIST_PATHS なら何もせず終了
  if (WHITE_LIST_PATHS.find(path => route.fullPath === path)) { return }

  // USER_SIGN_IN_PATH かどうか
  const isSignInPath = route.fullPath === USER_SIGN_IN_PATH

  // プロフィール取得APIを実行
  const response = await $axios.get('/api/user/profile').catch((error) => { return error.response })
  switch (response.status) {
    case 200:
      // x-csrf-tokenヘッダの値をlocalStorageに保存
      localStorage.csrfToken = response.headers['x-csrf-token']
      // USER_SIGN_IN_PATH のとき ユーザトップへリダイレクト
      if (isSignInPath) { return redirect(USER_PATH) }
      // USER_SIGN_IN_PATH でないとき 何もしない
      break

    default:
      // USER_SIGN_IN_PATH でないとき USER_SIGN_IN_PATHへリダイレクト
      if (!isSignInPath) { return redirect(USER_SIGN_IN_PATH) }
      // USER_SIGN_IN_PATH のとき 何もしない
      break
  }
}
