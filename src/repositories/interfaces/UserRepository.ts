import { Document } from 'mongoose'
import { IUser } from '../../models/interfaces'

export interface IUserRepository {
    create(user: Document): Promise<boolean>
    getByUsername(username: string): Promise<IUser | null>
}