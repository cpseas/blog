import { Document } from 'mongoose'
import { IComment } from '../models/interfaces'
import { ICommentRepository } from './interfaces'
import { CommentModel } from '../models'

export const CommentRepository = (): ICommentRepository => {
    const create = async (comment: Document): Promise<boolean> => {
        const res = await comment.save()
        return res && true
    }

    const getAll = async (postID: number): Promise<IComment[] | []> => {
        const comments = await CommentModel.find({ postID }).exec()
        return comments
    }

    const deleteComment = async (commentID: number): Promise<IComment | null> => {
        const comment = await CommentModel.findOneAndDelete({ commentID }).exec()
        return comment
    }
    
    return {
        create,
        getAll,
        deleteComment
    }
}