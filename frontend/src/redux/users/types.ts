
export type UserState = {
  user: User | null,
  userId: string | null,
  token: string | null
}

type User = {
  name: string,
  email: string
}