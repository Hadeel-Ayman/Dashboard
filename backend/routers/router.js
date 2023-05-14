const express = require('express')
const UserModel = require('../models/userModel')
const ProductModel = require('../models/productModel')
const router = express.Router()

//regestier
router.post('/regestier', (req, res) => {
    const user = new UserModel(req.body)
    user.save()
        .then((user) => res.status(200).send(user))
        .catch((e) => res.status(400).send(e))
})

// login
router.post('/login', async (req, res) => {
    try {
        const user = await UserModel.findByCredentials(req.body.email, req.body.password)
        res.status(200).send(user)
    } catch (e) {
        res.status(400).send(e.message)
    }
})

// add product 
router.post('/add-products', (req, res) => {
    const product = new ProductModel(req.body)
    product.save()
        .then((data) => res.status(200).send(data))
        .catch((e) => res.status(400).send(e.message))
})

// get all products
router.get('/products', async (req, res) => {
    ProductModel.find({}).then((data) => {
        res.status(200).send(data)
    }).catch((e) => res.status(500).send(e))

})

module.exports = router