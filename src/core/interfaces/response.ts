import { ICommentEntity, IPostEntity, IUserEntity } from '../../dtos/interfaces'

export type ErrorType = {message: string}
export type DataTypes = IUserEntity | IPostEntity | ICommentEntity | string

export enum Status {
	CREATED = 201,
	OK = 200,
	BAD_REQUEST = 400,
	INVALID_CREDENTIALS = 401,
	RESOURCE_ERROR = 404,
	SYSTEM_ERROR = 500
}

interface BaseResponse {
	statusCode: Status
	data: DataTypes | DataTypes[]
	error: ErrorType
	token: string
}

export type SuccessType = Pick<BaseResponse, 'statusCode' | 'data'>
export type FailureType = Pick<BaseResponse, 'statusCode' | 'error'>
export type LoginType = Pick<BaseResponse, 'statusCode' | 'token'>
export type CustomResponse = SuccessType | FailureType | LoginType