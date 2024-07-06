import * as postService from '../service/post'

export const getPosts = async(req, res) => {
    try {
        const response = await postService.getPostsService()
        return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json({
        err: -1,
        msg: 'Fail at post Controller' + error
      })
    }
}

export const getFilterPrice = async(req, res) => {
  const {query} = req.query
  try {
      const response = await postService.filterPrices(query)
      return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at post Controller' + error
    })
  }
}
export const posting = async (req, res) => {
    try {
      const {name} = req.body
      console.log('Request body:', req);
        const response = await postService.posting(req)
        // console.log(response);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at controller: ' + error
        })
    }
}