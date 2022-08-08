import axios from 'axios';
import Config from 'react-native-config';

const instance = axios.create({
	baseURL: Config.API_URL
});

instance.interceptors.request.use(async config => {
	//await new Promise(resolve => setTimeout(resolve, 50000000));
	return config;
});

export default instance;
