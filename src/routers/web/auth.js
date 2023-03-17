import { Router } from 'express'
import { getHome, getLogin, getLogout, postLogin } from '../../Controllers/auth.controller.js'
import { pathLog } from '../../Services/logger.js';


const authWebRouter = new Router()

authWebRouter.get('/', pathLog, getHome)

authWebRouter.get('/login', pathLog, getLogin)

authWebRouter.get('/logout', pathLog, getLogout)

authWebRouter.post('/login', pathLog, postLogin)


export default authWebRouter