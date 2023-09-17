import { Document } from 'mongoose'

export interface IComment extends Document {
    commentID: number
    title: string
    content: string
}