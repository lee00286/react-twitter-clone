import axios from 'axios';
import { SIGNIN_USER, SIGNUP_USER, AUTH_USER, SIGNOUT_USER } from './types';
import { USER_SERVER } from '../components/Config.js';

export function signupUser(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/signup`, dataToSubmit)
                         .then(response => response.data);
    return {
        type: SIGNUP_USER,
        payload: request
    };
};

export function signinUser(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/signin`, dataToSubmit)
                         .then(response => response.data);
    return {
        type: SIGNIN_USER,
        payload: request
    };
};

export function auth(){
    const request = axios.get(`${USER_SERVER}/auth`)
                         .then(response => response.data);
    return {
        type: AUTH_USER,
        payload: request
    };
};

export function signoutUser(){
    const request = axios.get(`${USER_SERVER}/signout`)
                         .then(response => response.data);
    return {
        type: SIGNOUT_USER,
        payload: request
    };
};