import db from '../models'

export const getBookRoomService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.BookRoom.findAll({
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

export const addBookRoomService = ({userId, postId}) => new Promise(async (resolve, reject) => {
    try {
        console.log(postId);
        const response = await db.BookRoom.findOrCreate({
            where: {userId},
            defaults: {
                userId,
                bookRoomId: postId
           }
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed to post BookRoom.',
            response
        })
    } catch (error) {
        reject(error)
    }
})

export const deleteBookRoomService = ({userId, postId}) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.BookRoom.findAll({
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