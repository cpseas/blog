import { CustomResponse, Status } from '../core/interfaces'
import { FailureResponse, LoginResponse, SuccessResponse } from '../core/response'
import { CreateUser, Login } from '../dtos/interfaces'
import { UserModel } from '../models'
import { ICounterRepository, IUserRepository } from '../repositories/interfaces'
import { comparePasswords, hashPassword } from '../utils/hash'
import { createJWT } from '../utils/jwt'
import { IUserService } from './interfaces'

export const UserService = (repository: IUserRepository, counter: ICounterRepository): IUserService => {
    const create = async (dto: CreateUser): Promise<CustomResponse> => {
        try {
			const hashedPassword = await hashPassword(dto.password)
			const count = await counter.getNextSequence('userID')

			if (!count) {
				return FailureResponse(Status.RESOURCE_ERROR, {message: 'Error...'})
			}

			const newUser = new UserModel({
				username: dto.username,
				password: hashedPassword,
				role: dto.role,
				userID: count
			})
			const repo = await repository.create(newUser)

			if (!repo) {
				return FailureResponse(Status.RESOURCE_ERROR, {message: 'Error...'})
			}

			return SuccessResponse(Status.CREATED, 'Successfully created!')
		} catch (error) {
			return FailureResponse(Status.SYSTEM_ERROR, {message: 'System Error...'})
		}
    }

    const login = async (dto: Login): Promise<CustomResponse> => {
        try {
			const user = await repository.getByUsername(dto.username)

			if (!user) {
				return FailureResponse(Status.RESOURCE_ERROR, {message: 'Username or Password are incorrect!'})
			}

			const matchPasswords = await comparePasswords(dto.password, user?.password)

			if (!matchPasswords) {
				return FailureResponse(Status.INVALID_CREDENTIALS, {message: 'Username or Password are incorrect!'})
			}

			const jwt = createJWT(user?.userID, user?.username)
			return LoginResponse(Status.OK, jwt)
		} catch (error) {
			return FailureResponse(Status.SYSTEM_ERROR, {message: 'System Error...'})
		}
    }
    
    return {
        create,
        login
    }
}