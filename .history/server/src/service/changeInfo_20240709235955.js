
import db from "../models"
import axios from 'axios';
import bcrypt from "bcryptjs"
import {uploadToCloudinary } from "../service/uploadService"
const apiUploadImages = (images) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'post',
            url: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload/`,
            data: images,
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})
const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10))
export const changeInfo = async (req) => new Promise(async (resolve, reject) => {
    try {
        const { id, password, username,zalo ,phone, newPassword} = req.body
        console.log(req.body);
        const  avatar = req.file
        const user = await db.User.findOne({
            where: { id },
            raw: true
        });
        if (!user) {
            reject({ message: 'User not found' });
            return;
        }
        const isPasswordValid = bcrypt.compareSync(password, user.password);
            console.log('Password:', password);
            console.log('Hashed Password in DB:', user.password);
            console.log('Is Password Valid:', isPasswordValid);
        if (!isPasswordValid) {
            reject({ message: 'Invalid password' });
            return;
        }
        let newAvatar = ''
        if(avatar){
            const result = await apiUploadImages(avatar);
            newAvatar = result.data?.secure_url
        }
        // console.log("url" + newAvatar);
        await db.User.update(
            {
                id: id || user.id,
                name: username || user.name,
                password: newPassword ? hashPassword(newPassword) : user.password,
                phone: phone || user.phone,
                zalo: zalo || user.zalo,
                avatar: newAvatar || user.avatar,
            },
            { where: { id } }
        );

        const updatedUser = await db.User.findOne({
            where: { id },
            raw: true
        });
        resolve(updatedUser);
    } catch (error) {
        reject(error);
    }
});