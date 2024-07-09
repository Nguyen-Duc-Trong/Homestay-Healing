import db from '../models'

export const getContractService = ({userId}) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Contract.findOne({
            where: {userId},
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed to post Contract.',
            response
        })
    } catch (error) {
        reject(error)
    }
})

export const addContractService = ({userId, postId}) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Contract.findOne({
            where: {userId},
        })
        if(!response){
            await db.Contract.create(
                { userId, contractId: JSON.stringify([postId]) }
            )
        }else{ 
            let newData = JSON.parse(response.contractId);
            newData.push(postId)
            response.contractId = JSON.stringify(newData); 
            response.save()
        }
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed to post Contract.',
            response
        })
    } catch (error) {
        reject(error)
    }
})