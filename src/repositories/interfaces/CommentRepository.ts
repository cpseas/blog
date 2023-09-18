import { Document } from 'mongoose'
import { IComment } from '../../models/interfaces'

export interface ICommentRepository {
    create(comment: Document): Promise<boolean>
    getAll(): Promise<IComment[] | []>
    deleteComment(commentID: number): Promise<IComment | null>
}