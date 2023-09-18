import { Document } from 'mongoose'
import { IPost, IPostUpdate } from '../../models/interfaces'

export interface IPostRepository {
    create(post: Document): Promise<boolean>
    getOne(postID: number): Promise<IPost | null>
    getAll(): Promise<IPost[] | null>
    updatePost(postID: number, data: IPostUpdate): Promise<IPost | null>
    deletePost(postID: number): Promise<IPost | null>
}