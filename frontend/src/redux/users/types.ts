
export type UserState = {
  user: User | null,
  userId: string | null,
}

type User = {
  name: string,
  email: string
}