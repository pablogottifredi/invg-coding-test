import { Router } from 'express'
import itemsController from '../controllers/items'

const router = Router()

router
  .get('/', itemsController.list)
  .post('/', itemsController.create)
  .get('/:id', itemsController.read)
  .put('/:id', itemsController.update)
  .delete('/:id', itemsController.del)

export default router
