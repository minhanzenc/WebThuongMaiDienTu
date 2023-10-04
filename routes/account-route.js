const { Router } = require("express");
const route = Router({ mergeParams: true });
const accountServ = require("../services/account-serv");
const accountDTO = require("../dtos/account-dto");
const {verifyToken} = require("../middlewares/verify-token")

route

    .get('/', async (req, res) => {
        try {
            const account = await accountServ.getAll();
            res.status(200).json({ data: account });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    })

    .post('/', async (req, res) => {
        try {
            const createAccountDTO = accountDTO.createAccountDTO(req.body);
            if (createAccountDTO.errMessage) {
                throw new Error(createAccountDTO.errMessage);
            }
            const account = await accountServ.create(createAccountDTO);
            res.status(200).json({ data: account });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    })

    .post('/login', async (req, res) => {
        try {
            const payload = accountDTO.loginPayloadDTO(req.body);
            if (payload.errMessage) {
                throw new Error(payload.errMessage);
            }
            const jwt = await accountServ.login(payload);
            res.status(200).json({ data: jwt });
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: error.message });
        }
    })


module.exports = { route };