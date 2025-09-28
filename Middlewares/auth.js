import jwt from 'jsonwebtoken'
import { User } from '../Models/User.js'
import dotenv from 'dotenv'

dotenv.config()

export const Authenticated = async (req,res,next)=>{
    const token = req.header('Auth')

    if(!token) return res.json({message:"login first"})

        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const id = decoded.userId

        let user = await User.findById(id)

        if(!user) return res.json({message:"user not exist"})

            req.user = user    //this we will use in cart.js addToCart function
            next()

            //console.log(decoded)


}