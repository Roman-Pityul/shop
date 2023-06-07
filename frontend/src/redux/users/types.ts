
export type UserState = {
  user: User | null,
  isLoading: boolean,
  showUserMenu: boolean
}

export type User = {
  userId: string
  userName: string
}