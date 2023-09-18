import { CustomResponse } from '../../core/interfaces'
import { CreateUser, Login } from '../../dtos/interfaces'

export interface IUserService {
    create(dto: CreateUser): Promise<CustomResponse>
    login(dto: Login): Promise<CustomResponse>
}