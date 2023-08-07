import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('accessToken');
    return axios.create({
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};
export default axiosWithAuth;