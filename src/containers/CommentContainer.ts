import { CommentController } from '../controllers'
import { ICommentController } from '../controllers/interfaces'
import { CommentRepository, CounterRepository } from '../repositories'
import { CommentService } from '../services'

export const CommentContainer = (): ICommentController => {
    const commentRepository = CommentRepository()
    const counterRepository = CounterRepository()
    const commentService = CommentService(commentRepository, counterRepository)
    const commentController = CommentController(commentService)
    return commentController
}