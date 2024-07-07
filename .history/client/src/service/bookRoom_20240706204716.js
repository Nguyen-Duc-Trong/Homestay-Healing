import axiosConfig from "../axiosConfig"
import axios from 'axios'
export const apiGetBookRoom = () => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/bookRoom/all',
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const apiAddBookRoom = () => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/bookRoom/add',
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const apiDeleteBookRoom = () => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/bookRoom/delete',
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})