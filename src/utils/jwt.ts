import jwt from 'jsonwebtoken'
import sanitizedConfig from '../core/config'

export interface JwtPayload {
    userID?: number
    username: string
}

export const createJWT = (userID: number, username: string) => {
    const payload: JwtPayload = {
        userID,
        username
    }
    return jwt.sign(payload, sanitizedConfig.SECRET as string, {
        expiresIn: '480m'
    })
}