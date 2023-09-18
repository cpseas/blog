import { model, Schema } from 'mongoose'
import { IComment } from './interfaces'

const CommentSchema: Schema<IComment> = new Schema<IComment>({
    commentID: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true
    }, 
    postID: {
        type: Number,
        ref: 'Post',
        required: true
    }
})

export const CommentModel = model<IComment>('Comment', CommentSchema)