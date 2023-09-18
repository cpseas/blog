import { Document } from 'mongoose'
import { IUserRepository } from './interfaces'
import { IUser } from '../models/interfaces'
import { UserModel } from '../models'

export const UserRepository = (): IUserRepository => {
    const create = async (user: Document): Promise<boolean> => {
        const res = await user.save()
        return res && true
    }

    const getByUsername = async (username: string): Promise<IUser | null> => {
        const user = await UserModel.findOne({username}).exec()
        return user
    }
    
    return {
        create,
        getByUsername
    }
}