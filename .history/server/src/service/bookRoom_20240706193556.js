import db from '../models'
import bookRoom from '../models/bookRoom'

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
        const response = await db.BookRoom.findOne({
            where: {userId},
        })
        if(!response){
            await db.BookRoom.create(
                { userId, bookRoomId: postId}
            )
        }else{
            // response.bookRoomId = response.bookRoomId + postId
            // response.save()
            console.log( typeof JSON.stringify(response.bookRoomId) );
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