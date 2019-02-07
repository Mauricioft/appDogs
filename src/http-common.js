import axios from 'axios'

const HTTP = axios.create({
  withCredentials: true,
  timeout: 50000,
  baseURL: `${process.env.VUE_APP_API_URL}/`
})

HTTP.defaults.withCredentials = false
HTTP.defaults.crossDomain = true
HTTP.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default HTTP;