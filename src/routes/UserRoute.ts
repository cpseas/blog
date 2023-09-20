import { Router } from 'express'
import { UserContainer } from '../containers'

const router: Router = Router()
const userController = UserContainer()

router.post('/', userController.create)
router.post('/login', userController.login)

export { router as userRouter }