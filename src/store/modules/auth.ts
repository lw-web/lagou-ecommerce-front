export interface User {
  _id: string
  email: string
  name: string
  role: number
}

export interface Jwt {
  token: string
  user: User
}
