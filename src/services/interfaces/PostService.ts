export interface IPostService {
    create(): Promise<null>
    getOne(): Promise<null>
    getAll(): Promise<null>
    updatePost(): Promise<null>
    deletePost(): Promise<null>
}