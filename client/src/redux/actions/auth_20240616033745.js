import actionTypes from './actionTypes'
import { apiRegister, apiLogin } from '../../service/auth'
import {changeInfo} from "../../service/changeInfo"
export const register = (payload) => async (dispatch) => {
    try {
        const response = await apiRegister(payload)
        if (response?.data.error === 0) {
            dispatch({
                type: actionTypes.REGISTER_SUCCESS,
                data: response.data
            })
        }else{
            dispatch({
                type: actionTypes.REGISTER_FAIL,
                data: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.REGISTER_FAIL,
            data: null
        })
    }
}
export const login = (payload) => async (dispatch) => {
    try {
        const response = await apiLogin(payload)
        if (response?.data.error === 0) {
            console.log(response);
            dispatch({
                type: actionTypes.LOGIN_SUCCESS,
                data: response.data
            })
        }else{
            dispatch({
                type: actionTypes.LOGIN_FAIL,
                data: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.LOGIN_FAIL,
            data: null
        })
    }
}
// <<<<<<< HEAD
// export const ChangeInfo= (payload) => async (dispatch) => {
//     try {
//         const response = await changeInfo(payload)
//         // console.log(response);
//         dispatch({
//             type: actionTypes.CHANGE_INFO,
//             data: response.data
//         })
//     } catch (error) {
//         alert(error)
//     }
// }
// =======
// >>>>>>> f014e9f95e87f448074d0592ef3bd508640f83d5
// export const logout = () => ({
//     type: actionTypes.LOGOUT
// })