import db from '../models'
import overview from '../models/overview'

export const getPostsService = () => new Promise(async(resolve, reject) => {
    try {
        const response = await db.Post.findAll({
            raw: true,
            nest: true,
            include: [
                { model: db.Image, as: 'images', attributes: ['image'] },
                { model: db.Attribute, as: 'attributes', attributes: ['price', 'acreage', 'published', 'hashtag'] },
                { model: db.User, as: 'users', attributes: ['name', 'phone', 'zalo'] },
                { model: db.Overview, as: 'overviews'}
            ],
            attributes: ['id', 'title', 'star', 'address', 'description', 'categoryCode', 'provinceCode', 'priceCode', 'acreageCode', 'overview']
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? "Ok" : "Getting posts is Fail",
            response : response,
        })
    } catch (error) {
        reject(error)
    }
})

export const filterPrices = (query) => new Promise(async(resolve, reject) => {
    try {
        const response = await db.Post.findAndCountAll({
            where: query,
            raw: true,
            nest: true,
            limit: +process.env.LIMIT,
            include: [
                { model: db.Image, as: 'images', attributes: ['image'] },
                { model: db.Attribute, as: 'attributes', attributes: ['price', 'acreage', 'published', 'hashtag'] },
                { model: db.User, as: 'users', attributes: ['name', 'phone', 'zalo'] },
            ],
            attributes: ['id', 'title', 'star', 'address', 'description', "acreageCode"]
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? "Ok" : "Getting posts is Fail",
            response : response,
        })
    } catch (error) {
        reject(error)
    }
})

