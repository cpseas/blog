import { PostController } from '../controllers'
import { IPostController } from '../controllers/interfaces'
import { CounterRepository, PostRepository } from '../repositories'
import { PostService } from '../services'

export const PostContainer = (): IPostController => {
    const postRepository = PostRepository()
    const counterRepository = CounterRepository()
    const postService = PostService(postRepository, counterRepository)
    const postController = PostController(postService)
    return postController
}