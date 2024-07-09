import * as service from '../service/bookRoom'

export const getBookRoom = async (req, res) => {
    try {
        const response = await service.getBookRoomSerivce()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at bookroom controller: ' + error
        })
    }
}