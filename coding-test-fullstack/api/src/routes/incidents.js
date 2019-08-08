import { Router } from 'express'
import incidentsController from '../controllers/incidents';

const router = Router()

router
  .get('/', incidentsController.validate('get'), incidentsController.read )
  .get('/tags/:helpdesk_id', incidentsController.tags)

export default router
