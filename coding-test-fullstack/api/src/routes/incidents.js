import { Router } from 'express'
import incidentsController from '../controllers/incidents';

const router = Router()

router
  .get('/search', incidentsController.validate('get'), incidentsController.read )
  .get('/search/tags/:helpdesk_id', incidentsController.tags)

export default router
