import { Router } from 'express'
import { pathLog } from '../../Services/logger.js'
import { traerFakeProducts } from '../../Controllers/mock.controller.js'

const productosApiRouter = new Router()

productosApiRouter.get('/api/productos-test', pathLog, traerFakeProducts)

export default productosApiRouter