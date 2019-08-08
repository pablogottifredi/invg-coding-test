import { Router } from 'express'
import incidents from './incidents'
import items from './items'

export default Router()
  .use('/incidents.by.helpdesk/', incidents )
  .use('/items/', items )
  
