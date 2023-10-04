const { Router } = require('express');
const route = Router({ mergeParams: true })
const imageServ = require('../services/image-serv')

route.get('/', async (req, res) => {
    try {
        const image = await imageServ.getAll();
        res.status(200).json({ data: image });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

})
route.post('/', async (req, res) => {
    try {
        const data = req.body;
        const image = await imageServ.create(data);
        res.status(201).json({ data: image });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

module.exports = { route };