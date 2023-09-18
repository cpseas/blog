export interface IUserService {
    create(): Promise<null>
    login(): Promise<null>
}