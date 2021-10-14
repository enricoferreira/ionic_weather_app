import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
})

export const api = {
    get(endpoint, params = {}){
        return axiosInstance.get(endpoint, params);
    },
}