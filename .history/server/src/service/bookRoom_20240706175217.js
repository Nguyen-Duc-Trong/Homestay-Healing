import db from '../models'

export const getBookRoomService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Bookroom.findAll({
            raw: true,
            attributes: ['userId', 'bookRoomId']
        })
        // console.log(response);
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed to post BookRoom.',
            response
        })
    } catch (error) {
        reject(error)
    }
})

export const addBookRoomService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Bookroom.findAll({
            raw: true,
            attributes: ['userId', 'bookRoomId']
        })
        // console.log(response);
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed to post BookRoom.',
            response
        })
    } catch (error) {
        reject(error)
    }
})

export const deleteBookRoomService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Bookroom.findAll({
            raw: true,
            attributes: ['userId', 'bookRoomId']
        })
        // console.log(response);
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed to post BookRoom.',
            response
        })
    } catch (error) {
        reject(error)
    }
})