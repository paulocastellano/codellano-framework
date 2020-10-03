import * as jwt from 'jsonwebtoken'

class RegisterController {
  register(req, res) {
    let payload = {
      iss: 'curs-ts',
      iat: new Date().getSeconds(),
      exp: new Date().setHours(1440),
      name: 'Paulo Castellano',
      email: 'paulofcastellano@gmail.com',
    }

    let token = jwt.sign(payload, 'my-key')

    res.json({ message: 'Register', token })
  }
}

export default new RegisterController()
