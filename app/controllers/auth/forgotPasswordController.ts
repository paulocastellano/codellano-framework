class ForgotPasswordController {
  forgot(req, res) {
    res.json({ message: 'Forgot password' })
  }
}

export default new ForgotPasswordController()
