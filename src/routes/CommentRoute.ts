import { Router } from 'express'
import { CommentContainer } from '../containers'

const router: Router = Router()
const commentController = CommentContainer()

router.get('/:id', commentController.getAll)
router.post('/', commentController.create)
router.delete('/:id', commentController.deleteComment)

export { router as commentRouter }