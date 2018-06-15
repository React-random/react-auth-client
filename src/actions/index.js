import { AUTH_USER, AUTH_ERROR } from './types';
import axios from 'axios';

const API_URL = 'http://localhost:3090';

export const signup = (credentials, callback) => async dispatch => {
    try{
        const response = await axios.post(`${API_URL}/signup`, credentials);

        dispatch({
            type: AUTH_USER,
            payload: response.data.token
        });

        callback();
    } catch (e) {
        dispatch({
            type: AUTH_ERROR,
            payload: 'Email in use'
        });
    }
};