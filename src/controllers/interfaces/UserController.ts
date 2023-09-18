import { Request, Response } from 'express'

export interface IUserController {
    create(req: Request, res: Response): Promise<void>
    login(req: Request, res: Response): Promise<void>
}