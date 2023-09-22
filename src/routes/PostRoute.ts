import { Router } from 'express'
import { PostContainer } from '../containers'
import { auth } from '../middlewares/auth'

const router: Router = Router()
const postController = PostContainer()

router.get('/:id', postController.getOne)
router.get('/', postController.getAll)
router.post('/', auth, postController.create)
router.put('/:id', auth, postController.updatePost)
router.delete('/:id', auth, postController.deletePost)

export { router as postRouter }