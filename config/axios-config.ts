import axios from 'axios'
import { bearerToken } from '../helpers/authHelper'
import { type } from 'ramda'
import config from './app-config'

const axiosInstance = axios.create({
    baseURL: config.API_BASE_URL,
    // withCredentials: true, 
    // crossDomain: true
})

const getAxios = (info: any) => {
    return new Promise((resolve, reject) => {

        const { url, params = {}, data = {}, method = 'get' } = info;
        // const withCredentials = true;

        let headers = {
            'Authorization': 'Bearer ' + bearerToken(),
            // 'Content-Type': type(data) === "FormData" ? "multipart/form-data" : "application/json;charset=UTF-8"
        }

        //axiosInstance.withCredentials = true;
        axiosInstance.request({ method, url, data, headers, params }).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            console.log('in the error');
            console.log(error.status);
            reject(error);
        })
    })
}

export {
    getAxios
}