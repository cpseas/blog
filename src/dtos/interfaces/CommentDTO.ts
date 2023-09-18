import { BaseEntity } from './BaseDTO'

export interface ICommentEntity extends Partial<BaseEntity> {
    commentID: number
    title: string
    content: string
    postID: number
}

export type CreateComment = Omit<ICommentEntity, '_id' | 'commentID'>
export type DeleteComment = Pick<ICommentEntity, 'commentID'>