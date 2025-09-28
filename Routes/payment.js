import express from 'express'
import {checkout,verify,userOrder,allOrders} from '../Controllers/payment.js'
import {Authenticated} from '../Middlewares/auth.js'


const router = express.Router()

//checkout
router.post('/checkout',checkout)

//verify payment & save to db
router.post('/verify-payment',verify)


//userOrder
router.get('/userorder',Authenticated,userOrder)

//all orders
router.get('/orders',allOrders)

export default router
