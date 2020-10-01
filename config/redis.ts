import * as redis from 'redis'

class Redis {
  private redis: redis

  start() {
    this.redis.createClient()
    this.redis.on('connect', function () {
      console.log('connected')
    })
  }
}
