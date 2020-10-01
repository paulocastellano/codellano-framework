import Kernel from './kernel'

let port = process.env.PORT || 3000

Kernel.app.listen(port, function () {
  console.log(`✅  Server running on the port: ${port}`)
})
