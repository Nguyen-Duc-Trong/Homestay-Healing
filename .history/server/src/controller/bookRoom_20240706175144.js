import * as service from '../service/bookRoom'

export const getBookRoom = async (req, res) => {
    try {
        const response = await service.getBookRoomService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at bookroom controller: ' + error
        })
    }
}

export const addBookRoom = async (req, res) => {
    try {
        const response = await service.addBookRoomService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at book room controller: ' + error
        })
    }
}

export const deleteBookRoom = async (req, res) => {
    try {
        const response = await service.deleteBookRoomService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at book room controller: ' + error
        })
    }
}