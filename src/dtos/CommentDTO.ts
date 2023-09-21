import { CreateComment, DeleteComment } from './interfaces'

export const CreateCommentDTO = (title: string, content: string, postID: number): CreateComment => {
    return {
        title,
        content,
        postID
    }
}

export const DeleteCommentDTO = (commentID: number): DeleteComment => {
    return {
        commentID
    }
}