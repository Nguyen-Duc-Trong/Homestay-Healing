import db from '../models'
import bcrypt from "bcryptjs"
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';
export const getPostsService = () => new Promise(async(resolve, reject) => {
    try {
        const response = await db.Post.findAll({
            raw: true,
            nest: true,
            include: [
                { model: db.Image, as: 'images', attributes: ['image'] },
                { model: db.Attribute, as: 'attributes', attributes: ['price', 'acreage', 'published', 'hashtag'] },
                { model: db.User, as: 'users', attributes: ['name', 'phone', 'zalo'] },
            ],
            attributes: ['id', 'title', 'star', 'address', 'description', 'categoryCode']
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
            attributes: ['id', 'title', 'star', 'address', 'description']
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

export const posting  = (data) => new Promise(async (resolve, reject) => {
    try {
        console.log(data);
        let attributesId = uuidv4()
        let userId = uuidv4()
        let overviewId = uuidv4()
        let imagesId = uuidv4()
        let currentAcreage = getNumberFromString(item?.header?.attributes?.acreage)
        let currentPrice = getNumberFromString(item?.header?.attributes?.price)

        // await db.Post.create({
        //     id: postId,
        //     title: item?.header?.title,
        //     star: item?.header?.star,
        //     labelCode,
        //     address: item?.header?.address,
        //     attributesId,
        //     categoryCode: cate.code,
        //     description: JSON.stringify(item?.mainContent?.content),
        //     userId,
        //     overviewId,
        //     imagesId,
        //     priceCode: dataPrice.find(price => price.max >= currentPrice && price.min <= currentPrice)?.code,
        //     acreageCode: dataAcreage.find(acreage => acreage.max >= currentAcreage && acreage.min <= currentAcreage)?.code, //Hàm này sẽ trả về số diện tích nằm trong Obj nào sau khi tìm
        //     provinceCode
        // })
        // await db.Attribute.create({
        //     id: attributesId,
        //     price: item?.header?.attributes?.price,
        //     acreage: item?.header?.attributes?.acreage,
        //     published: item?.header?.attributes?.published,
        //     hashtag: item?.header?.attributes?.hashtag,
        // })
        // await db.Image.create({
        //     id:imagesId,
        //     image: JSON.stringify(item?.images)
        // })
        // await db.Overview.create({
        //     id:overviewId,
        //     code: item?.overview?.content.find(i => i.name === "Mã tin:")?.content,
        //     area: item?.overview?.content.find(i => i.name === "Khu vực")?.content,
        //     type: item?.overview?.content.find(i => i.name === "Loại tin rao:")?.content,
        //     target: item?.overview?.content.find(i => i.name === "Đối tượng thuê:")?.content,
        //     bonus: item?.overview?.content.find(i => i.name === "Gói tin:")?.content,
        //     created: item?.overview?.content.find(i => i.name === "Ngày đăng:")?.content,
        //     expire: item?.overview?.content.find(i => i.name === "Ngày hết hạn:")?.content,
        // })


        resolve(body)
    } catch (error) {
        reject(error)
    }
})