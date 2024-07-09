import db from '../models'

export const getBookRoomSerivce = () => new Promise(async (resolve, reject) => {
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

export const addBookRoomSerivce = () => new Promise(async (resolve, reject) => {
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

export const deleteBookRoomSerivce = () => new Promise(async (resolve, reject) => {
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