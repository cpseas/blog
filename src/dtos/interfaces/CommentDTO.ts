import { BaseEntity } from './BaseDTO'

export interface ICommentEntity extends Partial<BaseEntity> {
    readonly commentID: number
    title: string
    content: string
    readonly postID: number
}

export type CreateComment = Omit<ICommentEntity, '_id' | 'commentID'>
export type DeleteComment = Pick<ICommentEntity, 'commentID'>