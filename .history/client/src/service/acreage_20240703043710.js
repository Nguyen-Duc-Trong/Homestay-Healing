import axiosConfig from "../axiosConfig"

export const apiGetAcreages = () => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/acreage/all'
        })
        console.log(response);
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
apiGetAcreages()