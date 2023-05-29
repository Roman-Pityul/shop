
export type UserState = {
  user: User | null,
  isLoading: boolean
}

export type User = {
  userId: string
  userName: string
}