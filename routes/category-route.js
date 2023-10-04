const { Router } = require('express')
const route = Router({ mergeParams: true })
const categoryServ = require('../services/category-serv')
const categoryDTO = require("../dtos/category-dto")

route.get('/', async (req, res) => {
    try {
        const categories = await categoryServ.getAll();
        console.log(categories);
        res.status(200).json({ data: categories });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
})
route.post('/', async (req, res) => {
    try {
        const createCategoryDTO = categoryDTO.createCategoryDTO(req.body)
        // console.log(createCategoryDTO);
        if (createCategoryDTO.errMessage) {
            throw new Error(createCategoryDTO.errMessage)
        }
        const createdCategory = await categoryServ.create(createCategoryDTO);
        res.status(200).json({ data: createdCategory })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
})

route.put('/', (req, res) => {
    res.status(200).json({ message: "Cap nhat category" })
})
route.delete('/', (req, res) => {
    res.status(200).json({ message: "Xoa category" })
})

module.exports = { route };
