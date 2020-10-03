class ResetPasswordController {
  reset(req, res) {
    res.json({ message: 'Forgot password' })
  }
}

export default new ResetPasswordController()
