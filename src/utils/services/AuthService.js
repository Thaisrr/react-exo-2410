import axios from "axios";

//const api_url = process.env.REACT_APP_API;
const api_url = "http://localhost:8080";

export const register = async (user) => {
    const {data} = await axios.post(`${api_url}/register`, user);
    saveToken(data?.accessToken);
    return true;
}

export const connect = async (credentials) => {
    console.log(credentials)
    const {data} = await axios.post(`${api_url}/login`, credentials);
    saveToken(data?.accessToken);
    return true;
}

export const saveToken = (token) => {
    localStorage.setItem('token', token);
}

export const logout = () => localStorage.clear();

export const isLogged = () => !!localStorage.getItem('token');