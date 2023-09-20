import { CustomResponse } from '../../core/interfaces'
import { CreatePost, DeletePost, UpdatePost } from '../../dtos/interfaces'

export interface IPostService {
    create(dto: CreatePost): Promise<CustomResponse>
    getOne(postID: number): Promise<CustomResponse>
    getAll(): Promise<CustomResponse>
    updatePost(dto: UpdatePost): Promise<CustomResponse>
    deletePost(dto: DeletePost): Promise<CustomResponse>
}