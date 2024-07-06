import * as service from '../service/posting'

export const posting = async (req, res) => {
    try {
        req.send('okkk')
        const response = await service.posting()
        // return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at controller: ' + error
        })
    }
}