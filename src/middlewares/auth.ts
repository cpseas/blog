import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import sanitizedConfig from '../core/config'

export const auth = (req: Request, res: Response, next: NextFunction): void | Response => {
    const token= req.header('Authorization')?.replace('Bearer ', '')

    if (!token) {
        return res.status(401).json({ message: 'No token provided!' })
    }

    try {
        const decoded = jwt.verify(token, sanitizedConfig.SECRET as string)

        if (!decoded) {
            return res.status(403).json({ message: 'Failed to authenticate token!' })
        }
        next()
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized!', error: error })
    }
}