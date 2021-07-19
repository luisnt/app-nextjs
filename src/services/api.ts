import axios, { AxiosInstance } from "axios";


export function api(): AxiosInstance{
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:8080'
    })
    
    const token = localStorage.getItem("app-auth-token")

    if (token) {
        axiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`;
    }
        
    return axiosInstance
}