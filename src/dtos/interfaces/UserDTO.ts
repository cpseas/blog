import { BaseEntity } from './BaseDTO'

export interface IUserEntity extends Partial<BaseEntity> {
    readonly username: string
    password: string
    userID: number
    role: string
}

export type CreateUser = Omit<IUserEntity, '_id' | 'userID'>
export type Login = Pick<IUserEntity, 'username' | 'password'>