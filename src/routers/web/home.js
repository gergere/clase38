import { Router } from 'express'
import { auth } from '../../Controllers/auth.controller.js';
import { pathLog } from '../../Services/logger.js';
import { getProductosVistaTest, renderHome } from '../../Controllers/home.controller.js';

const productosWebRouter = new Router()

productosWebRouter.get('/home', auth, pathLog, renderHome)

productosWebRouter.get('/productos-vista-test', pathLog, getProductosVistaTest)

export default productosWebRouter