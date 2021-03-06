import * as request from 'supertest'
import Kernel from '../../bootstrap/kernel'

describe('Login testing', () => {
  it('Should return an http 200 and a "message" property (route: GET /)', async () => {
    const res = await request(Kernel.app).get('/api/login')
    expect(res.status).toEqual(200)
    expect(res.body).toHaveProperty('message')
  })
  // A validação do retorno 404 irei deixar como desafio
})
