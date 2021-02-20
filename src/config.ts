export let API: string

if (process.env.NODE_ENV === "production") {
  // ! ---> 非空断言
  API = process.env.REACT_APP_DEVLOPMENT_API_URL!
} else if (process.env.NODE_ENV === 'development') {
  API = process.env.REACT_APP_PRODUCTION_API_URL!
}
