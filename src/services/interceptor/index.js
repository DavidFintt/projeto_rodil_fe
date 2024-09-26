import axios from 'axios'


const api = axios.create({
	baseURL: 'http://127.0.0.1:8000',
})


// api.interceptors.request.use(
// 	(config) => {
// 		const token = localStorage.getItem('access')
// 		if (token) {
// 			config.headers.Authorization = `Bearer ${token}`
//             config.headers['Content-Type'] = 'application/json'
// 		}

// 		return config
// 	},
// 	(error) => {
// 		return Promise.reject(error)
// 	},
// )


// api.interceptors.response.use(
// 	(response) => response,
// 	(error) => {
	
// 		if (error.response.status === 401) {
//             return refreshToken().then((response) => {
//                 if(response.status === 401){
//                     localStorage.clear()
//                     window.location.href = '/login'
//                 }
//             })
// 		}
// 		return Promise.reject(error)
// 	},
// )


// async function refreshToken() {
// 	const refreshToken = localStorage.getItem('refresh')

// 	return axios
// 		.post('http://127.0.0.1:8000/users/refresh/', { refresh: refreshToken })
// 		.then((response) => {
// 			const { access } = response.data
// 			localStorage.setItem('access', access)
// 			return response
// 		})
// 		.catch((error) => {
// 			console.error('Falha ao renovar o token:', error)
// 			return error.response
// 		})
// }

export default api
