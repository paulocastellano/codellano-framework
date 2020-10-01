import * as express from 'express'

const routerWeb = express.Router()

routerWeb.get('/', (req, res) => {
  res.json({ message: 'Welcome to Codellano' })
})

export default routerWeb
