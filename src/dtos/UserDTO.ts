import { CreateUser, Login } from './interfaces'

export const CreateUserDTO = (username: string, password: string, role: string): CreateUser => {
    return {
        username,
        password,
        role
    }
}

export const LoginDTO = (username: string, password: string): Login => {
	return {
		username,
		password
	}
}