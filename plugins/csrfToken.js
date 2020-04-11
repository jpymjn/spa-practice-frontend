export default function ({ $axios }) {
  $axios.interceptors.request.use((config) => {
    // localStorageに保存されたCSRFトークン値をx-csrf-tokenヘッダにセット
    config.headers['x-csrf-token'] = localStorage.csrfToken
    return config
  })
}
