import axiosConfig from "../axiosConfig"
import axios from 'axios'
export const apiGetPosts = () => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/post/all',
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetPostLimit = (query) => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: `/api/v1/post/limit`,
            params: query
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetFilterPrice = (query) => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: `/api/v1/post/limit`,
            params: query
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const apiUploadImages = (images) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'post',
            url: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload/`,
            data: images,
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})
export const apiNewPost = (payload) => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/post/posting',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const apiDeletePost = (payload) => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/post/deletePost',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})