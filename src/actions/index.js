import { AUTH_USER } from './types';
import axios from 'axios';

const API_URL = 'http://localhost:3090';

export const signup = (credentials) => dispatch => {
    axios.post(`${API_URL}/signup`, credentials).then((res) => {
        console.log(res.data);
    })
};