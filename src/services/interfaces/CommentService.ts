import { CustomResponse } from '../../core/interfaces'
import { CreateComment, DeleteComment } from '../../dtos/interfaces'

export interface ICommentService {
    create(dto: CreateComment): Promise<CustomResponse>
    getAll(postID: number): Promise<CustomResponse>
    deleteComment(dto: DeleteComment): Promise<CustomResponse>
}