import { create } from 'apisauce'

const apiClient = create({
    baseURL: 'http://192.168.0.25:9000/api',
    timeout: 30000
})

export default apiClient