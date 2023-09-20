import { CustomResponse, Status } from '../core/interfaces'
import { FailureResponse, SuccessResponse } from '../core/response'
import { ICounterRepository, IPostRepository } from '../repositories/interfaces'
import { IPostService } from './interfaces'
import { CreatePost, DeletePost, UpdatePost } from '../dtos/interfaces'
import { PostModel } from '../models'

export const PostService = (repository: IPostRepository, counter: ICounterRepository): IPostService => {
    const create = async (dto: CreatePost): Promise<CustomResponse> => {
        try {
            const count = await counter.getNextSequence('postID')

            if (!count) {
                return FailureResponse(Status.RESOURCE_ERROR, { message: 'Error...' })
            }

            const newPost = new PostModel(dto.title, dto.content)
            const repo = await repository.create(newPost)
            
            if (!repo) {
                return FailureResponse(Status.RESOURCE_ERROR, { message: 'Error...' })
            }

            return SuccessResponse(Status.CREATED, 'Successfully created!')
        } catch (error) {
            return FailureResponse(Status.SYSTEM_ERROR, { message: 'System error...' })
        }
    }

    const getOne = async (postID: number): Promise<CustomResponse> => {
        try {
            const repo = await repository.getOne(postID)

            if (!repo) {
                return FailureResponse(Status.BAD_REQUEST, { message: 'Bad request...' })
            }

            return SuccessResponse(Status.OK, repo)
        } catch (error) {
            return FailureResponse(Status.SYSTEM_ERROR, { message: 'System error...' })
        }
    }

    const getAll = async (): Promise<CustomResponse> => {
        try {
            const repo = await repository.getAll()

            if (!repo) {
                return FailureResponse(Status.BAD_REQUEST, { message: 'Bad request...' })
            }

            return SuccessResponse(Status.OK, repo)
        } catch (error) {
            return FailureResponse(Status.SYSTEM_ERROR, { message: 'System error...' })
        }
    }

    const updatePost = async (dto: UpdatePost): Promise<CustomResponse> => {
        try {
            const data = {
                title: dto.title,
                content: dto.content
            }
            const repo = await repository.updatePost(dto.postID, data)

            if (!repo) {
                return FailureResponse(Status.BAD_REQUEST, { message: 'Bad Request...' })
            }

            return SuccessResponse(Status.OK, 'Successfully created!')
        } catch (error) {
            return FailureResponse(Status.SYSTEM_ERROR, { message: 'System error...' })
        }
    }

    const deletePost = async (dto: DeletePost): Promise<CustomResponse> => {
        try {
            const repo = await repository.deletePost(dto.postID)

            if (!repo) {
                return FailureResponse(Status.RESOURCE_ERROR, { message: 'Error...' })
            }

            return SuccessResponse(Status.OK, repo)
        } catch (error) {
            return FailureResponse(Status.SYSTEM_ERROR, { message: 'System error...' })
        }
    }
    
    return {
        create,
        getOne,
        getAll,
        updatePost,
        deletePost
    }
}