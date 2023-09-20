import { CreatePost, DeletePost, UpdatePost } from './interfaces'

export const CreatePostDTO = (title: string, content: string): CreatePost => {
    return {
        title,
        content
    }
}

export const UpdatePostDTO = (postID: number, title?: string, content?: string): UpdatePost => {
    return {
        postID,
        title,
        content
    }
}

export const DeletePostDTO = (postID: number): DeletePost => {
    return {
        postID
    }
}