import { Request, Response } from 'express'
import { IUserService } from '../services/interfaces'
import { IUserController } from './interfaces'
import { CreateUserDTO, LoginDTO } from '../dtos'

export const UserController = (service: IUserService): IUserController => {
    const create = async (req: Request, res: Response): Promise<void> => {
        const { username, password, role } = req.body
        
        if (!username || !password || !role) {
            res.status(400).json({ message: 'Bad Request!' })
        }
        
        const dto = CreateUserDTO(username, password, role)
        if (!dto) {
            res.status(400).json({ message: 'Unexpected error!' })
        }
        
        const serviceResponse = await service.create(dto)
        res.status(serviceResponse.statusCode).json({ message: serviceResponse})
    }

    const login = async (req: Request, res: Response): Promise<void> => {
        const { username, password } = req.body

        if (!username || !password) {
            res.status(400).json({ message: 'Bad Request!' })
        }

        const dto = LoginDTO(username, password)
        const serviceResponse = await service.login(dto)
        res.status(serviceResponse.statusCode).json({ message: serviceResponse })
    }

    return {
        create,
        login
    }
}