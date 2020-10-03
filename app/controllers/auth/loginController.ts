class LoginController {
  login(req, res) {
    res.json({ message: 'Login' })
  }
}

export default new LoginController()
