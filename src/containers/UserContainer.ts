import { UserController } from '../controllers'
import { IUserController } from '../controllers/interfaces'
import { CounterRepository, UserRepository } from '../repositories'
import { UserService } from '../services'

export const UserContainer = (): IUserController => {
    const userRepository = UserRepository()
    const counterRepository = CounterRepository()
    const userService = UserService(userRepository, counterRepository)
    const userController = UserController(userService)
    return userController
}