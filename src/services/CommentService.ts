import { CustomResponse, Status } from '../core/interfaces'
import { FailureResponse, SuccessResponse } from '../core/response'
import { CreateComment, DeleteComment } from '../dtos/interfaces'
import { CommentModel } from '../models'
import { ICommentRepository, ICounterRepository } from '../repositories/interfaces'
import { ICommentService } from './interfaces'

export const CommentService = (repository: ICommentRepository, counter: ICounterRepository): ICommentService => {
    const create = async (dto: CreateComment): Promise<CustomResponse> => {
        try {
            const count = await counter.getNextSequence('commentID')

            if (!count) {
                return FailureResponse(Status.RESOURCE_ERROR, { message: 'Error...' })        
            }
            
            // Fix postID
            const newComment = new CommentModel({
                commentID: count,
                title: dto.title,
                content: dto.content,
                postID: dto.postID
            })

            const repo = await repository.create(newComment)
            
            if (!repo) {
                return FailureResponse(Status.RESOURCE_ERROR, { message: 'Error...' })        
            }

            return SuccessResponse(Status.OK, 'Successfully created!')        
        } catch (error) {
            return FailureResponse(Status.SYSTEM_ERROR, { message: 'System error...' })        
        }
    }

    const getAll = async (postID: number): Promise<CustomResponse> => {
        try {
            const repo = await repository.getAll(postID)

            if (!repo) {
                return FailureResponse(Status.BAD_REQUEST, { message: 'Bad Request...' })        
            }

            return SuccessResponse(Status.OK, repo)        
        } catch (error) {
            return FailureResponse(Status.SYSTEM_ERROR, { message: 'System error...' })        
        }
    }

    const deleteComment = async (dto: DeleteComment): Promise<CustomResponse> => {
        try {
            const repo = await repository.deleteComment(dto.commentID)

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
        getAll,
        deleteComment
    }
}