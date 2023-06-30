import axios from "axios";

const instanse = axios.create({
	baseURL: 'https://api.escuelajs.co/api/v1/'
});

export const setToken = (token) => {
	instanse.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const signUp = async (body) => {
	return await instanse.post('/users', body)
}

export const login = async (body) => {
	const { data } = await instanse.post('/auth/login', body);
	if ('access_token' in data) setToken(data.access_token);
	return data;
}
export const getProfile = async () => {
	const { data } = await instanse('/auth/profile');
	return data;
}

