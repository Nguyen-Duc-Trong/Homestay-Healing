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
        const bookRoom = await db.BookRoom.findOne({
            where: {userId},
            // defaults: {
            //     userId,
            //     bookRoomId: postId
            // }
        })
        if(!bookRoom){
            console.log('Và ok ok và mấy con chó này ok và bố mày nói là hơi khê....');
        }else{

        }
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