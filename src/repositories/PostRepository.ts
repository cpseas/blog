import { Document } from 'mongoose'
import { IPostRepository } from './interfaces'
import { IPost, IPostUpdate } from '../models/interfaces'
import { PostModel } from '../models'

export const PostRepository = (): IPostRepository => {
    const create = async (post: Document): Promise<boolean> => {
        const res = await post.save()
        return res && true
    }

    const getOne = async (postID: number): Promise<IPost | null> => {
        const post = await PostModel.findOne({postID}).exec()
        return post
    }

    const getAll = async (): Promise<IPost[] | []> => {
        const posts = await PostModel.find().exec()
        return posts
    }

    const updatePost = async (postID: number, data: IPostUpdate): Promise<IPost | null> => {
        const post = await PostModel.findOneAndUpdate({ postID }, data).exec()
        return post
    }

    const deletePost = async (postID: number): Promise<IPost | null> => {
        const post = await PostModel.findOneAndDelete({ postID }).exec()
        return post
    }
    
    return {
        create,
        getOne,
        getAll,
        updatePost,
        deletePost
    }
}