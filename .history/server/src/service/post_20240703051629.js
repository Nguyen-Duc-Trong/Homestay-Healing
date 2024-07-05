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
        const {star,title,userId,categoryCode,ContactInfo,areaNumber,
            priceNumber,images,address,priceCode,areaCode,description,
            target,province,acreagesCode} = data

// post // ,id,title,star,labelCode,address,attributesId,categoryCode,
//priceCode,acreageCode,provinceCode,description,userId,overviewId,imagesId,createdAt,updatedAt
        let postId = uuidv4()
        let labelCode = uuidv4()
        let attributesId = uuidv4()
        let overviewId = uuidv4()
        let imagesId = uuidv4()
        await db.Post.create({
            id: postId,
            title: title,
            star: star,
            labelCode : labelCode,
            address: address,
            attributesId : attributesId,
            categoryCode: categoryCode,
            description: JSON.stringify(description),
            userId : userId,
            overviewId : overviewId,
            imagesId : imagesId,
            priceCode: priceCode,
            acreageCode: acreagesCode, 
            provinceCode : areaCode
        })

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


        resolve(data )
    } catch (error) {
        reject(error)
    }
})