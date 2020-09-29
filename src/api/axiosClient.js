import axios from 'axios';

const axiosClient = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		'content-type': 'application/json',
	},
});

axiosClient.interceptors.request.use(
	async config => {
		// Handle token here
		return config;
	},
	error => {
		// Handle error
		throw error;
	},
);

axiosClient.interceptors.response.use(
	response => {
		if (response && response.data) return response.data;
		return response;
	},
	error => {
		// Handle error
		throw error;
	},
);

export default axiosClient;
