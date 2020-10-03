import * as express from 'express'

import loginController from '../app/controllers/auth/loginController'
import registerController from '../app/controllers/auth/registerController'

const routerWeb = express.Router()

// auth
routerWeb.get('/register', registerController.register)
routerWeb.get('/login', loginController.login)

export default routerWeb
