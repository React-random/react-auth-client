import { AUTH_USER } from './types';
import axios from 'axios';

const API_URL = 'http://localhost:3090';

export const signup = (credentials) => async dispatch => {
    const response = await axios.post(`${API_URL}/signup`, credentials);

    dispatch({
        types: AUTH_USER,
        payload: response.data.token
    });
};