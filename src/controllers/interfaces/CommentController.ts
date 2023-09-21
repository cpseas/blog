import { Request, Response } from 'express'

export interface ICommentController {
    create(req: Request, res: Response): Promise<void>
    getAll(req: Request, res: Response): Promise<void>
    deleteComment(req: Request, res: Response): Promise<void>
}