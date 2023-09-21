import { Request, Response } from 'express'
import { ICommentController } from '../controllers/interfaces'
import { ICommentService } from '../services/interfaces'
import { CreateCommentDTO, DeleteCommentDTO } from '../dtos'

export const CommentController = (service: ICommentService): ICommentController => {
    const create = async (req: Request, res: Response): Promise<void> => {
        const { title, content, postID } = req.body

        if (!title || !content || !postID) {
            res.status(400).json({ message: 'Bad Request!' })
        }

        const dto = CreateCommentDTO(title, content, postID)

        if (!dto) {
            res.status(400).json({ message: 'Unexpected error!' })
        }

        const serviceResponse = await service.create(dto)
        res.status(200).json({ message: serviceResponse })
    }

    const getAll = async (_: Request, res: Response): Promise<void> => {
        const serviceResponse = await service.getAll()
        res.status(200).json({ message: serviceResponse })
    }

    const deleteComment = async (req: Request, res: Response): Promise<void> => {
        const { commentID } = req.body

        if (!commentID) {
            res.status(400).json({ message: 'Bad Request!' })
        }

        const dto = DeleteCommentDTO(commentID)

        if (!dto) {
            res.status(400).json({ message: 'Unexpected error!' })
        }

        const serviceResponse = await service.deleteComment(dto)
        res.status(200).json({ message: serviceResponse })
    }
    
    return {
        create,
        getAll,
        deleteComment
    }
}