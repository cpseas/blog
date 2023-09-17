import { model, Schema } from 'mongoose'
import { IUser } from './interfaces'

const UserSchema: Schema<IUser> = new Schema<IUser>({
    userID: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        required: true
    }
})

export const UserModel = model<IUser>('User', UserSchema)