export interface ICommentService {
    create(): Promise<null>
    getAll(): Promise<null>
    deleteComment(): Promise<null>
}