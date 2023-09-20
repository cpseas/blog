import { Request, Response } from 'express'
import { IPostService } from '../services/interfaces'
import { IPostController } from './interfaces'
import { CreatePostDTO, DeletePostDTO, UpdatePostDTO } from '../dtos'

export const PostController = (service: IPostService): IPostController => {
    const create = async (req: Request, res: Response): Promise<void> => {
        const { title, content } = req.body

        if (!title || !content) {
            res.status(400).json({ message: 'Bad Request!'})
        }

        const dto = CreatePostDTO(title, content)

        if (!dto) {
            res.status(400).json({ message: 'Unexpected error!'})
        }

        const serviceResponse = await service.create(dto)
        res.status(200).json({ message: serviceResponse })
    }

    const getOne = async (req: Request, res: Response): Promise<void> => {
        const { postID } = req.body

        if (!postID) {
            res.status(400).json({ message: 'Bad Request!' })
        }

        const serviceResponse = await service.getOne(postID)
        res.status(200).json({ message: serviceResponse })
    }

    const getAll = async (_: Request, res: Response): Promise<void> => {
        const serviceResponse = await service.getAll()
        res.status(200).json({ message: serviceResponse })
    }

    const updatePost = async (req: Request, res: Response): Promise<void> => {
        const { postID, title, content, } = req.body

        if (!postID || !title || !content) {
            res.status(400).json({ message: 'Bad Request!' })
        }

        const dto = UpdatePostDTO(postID, title, content)

        if (!dto) {
            res.status(400).json({ message: 'Unexpected Error!' })
        }
        
        const serviceResponse = await service.updatePost(dto)
        res.status(200).json({ message: serviceResponse })
    }

    const deletePost = async (req: Request, res: Response): Promise<void> => {
        const { postID } = req.body

        if (!postID) {
            res.status(400).json({ message: 'Bad Request!' })
        }

        const dto = DeletePostDTO(postID)

        if (!dto) {
            res.status(400).json({ message: 'Unexpected error!' })
        }
        
        const serviceResponse = await service.deletePost(dto)
        res.status(200).json({ message: serviceResponse })
    }

    return {
        create,
        getOne,
        getAll,
        updatePost,
        deletePost
    }
}