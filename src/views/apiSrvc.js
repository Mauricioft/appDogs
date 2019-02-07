import HTTP from '../http-common'

export default {
  async index() {
    const response = await HTTP.get('breeds/image/random/2')
    return response.data
  },
  async list() {
    const response = await HTTP.get('breed/hound/afghan/images')
    return response.data
  },
}