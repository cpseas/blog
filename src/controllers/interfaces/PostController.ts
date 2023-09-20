import { Request, Response } from 'express'

export interface IPostController {
    create(req: Request, res: Response): Promise<void>
    getOne(req: Request, res: Response): Promise<void>
    getAll(req: Request, res: Response): Promise<void>
    updatePost(req: Request, res: Response): Promise<void>
    deletePost(req: Request, res: Response): Promise<void>
}