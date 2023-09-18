import { DataTypes, ErrorType, FailureType, LoginType, Status, SuccessType } from './interfaces'

export const SuccessResponse = (statusCode: Status, data: DataTypes | DataTypes[]): SuccessType => {
    return {
        statusCode,
        data
    }
}

export const FailureResponse = (statusCode: Status, error: ErrorType): FailureType => {
    return {
        statusCode,
        error
    }
}

export const LoginResponse = (statusCode: Status, token: string): LoginType => {
	return {
		statusCode,
        token
	}
}