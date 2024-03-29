import { Document } from 'mongoose'

export interface IPost extends Document {
    postID: number
    title: string
    content: string
}

export type IPostUpdate = Partial<Omit<IPost, 'postID'>>