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

export const addContractService = ({userId, dataContract}) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Contract.findOne({
            where: {userId},
        })
        if(!response){
            await db.Contract.create(
                { userId, contractId: JSON.stringify([dataContract]) }
            )
        }else{ 
            let newData = JSON.parse(response.contractId);
            // const check =  newData.find((item)=> item.)
            newData.push(dataContract)
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