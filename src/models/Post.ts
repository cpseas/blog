import { model, Schema} from 'mongoose'
import { IPost } from './interfaces'

const PostSchema: Schema<IPost> = new Schema<IPost>({
    postID: {
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
    }
})

export const PostModel = model<IPost>('Post', PostSchema)