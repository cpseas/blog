import { BaseEntity } from './BaseDTO'

export interface IPostEntity extends Partial<BaseEntity> {
    postID: number
    title: string
    content: string
}

export type CreatePost = Pick<IPostEntity, 'title' | 'content'>
export type UpdatePost = Required<Pick<IPostEntity, 'postID'>> & Partial<Pick<IPostEntity, 'title' | 'content'>>
export type DeletePost = Pick<IPostEntity, 'postID'>