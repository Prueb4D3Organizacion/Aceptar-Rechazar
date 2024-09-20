import axios from 'axios'

export class TenantApiServices {
  async getAllTenants() {
    return await axios.get('http://localhost:3000/tenant')
  }
  async getTenant(id) {
    return await axios.get(`/tenants/${id}`)
  }
  async saveTenant(body) {
    return await axios.post('/tenants', body)
  }
  async updateTenant(id, body) {
    return await axios.put(`/tenants/${id}`, body)
  }
  async deleteTenant(id) {
    return await axios.delete(`/tenants/${id}`)
  }
}