import Cookies from "js-cookie"
import { TokensType } from "../api/types"
import { User } from "../redux/users/types"

export const getLocalStorage = (name: string) => {
    if (typeof localStorage !== 'undefined') {
        const data = localStorage.getItem(name)
        return data ? JSON.parse(data) : null
    }
    return null
}

export const saveTokensToCookie = (tokens: TokensType) => {
    Cookies.set('accessToken', tokens.accessToken)
    Cookies.set('refreshToken', tokens.refreshToken)
}

export const remooveTokensToStorage = () => {
    Cookies.remove('accessToken')
    Cookies.remove('refreshToken')
}

export const saveUserToStorage = (user: User) => {
    localStorage.setItem('user', JSON.stringify({userId: user.userId, userName: user.userName}) )
}
