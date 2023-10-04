const accountRepo = require("../repositories/account-repo");
const { signToken } = require("../helpers/signToken");
const bcrypt = require("bcrypt")

const getAll = () => account.getAll();

const create = async (body) => {
    body.password = await bcrypt.hash(body.password,10)
    return accountRepo.create(body)
};

const login = async (body) => {
    const { email, password } = body;
    //lay email so sanh db
    //lay password ss trong doi tuong email
    // const account = accountRepo.getEmail(body);
    // if (account) {
    //     if (account.password === body.password) {
    //         const signTokenFE = jwt(account)
    //         return signTokenFE;
    //     }
    // }

    const account = await accountRepo.getByEmail(email);
    if (!account) {
        throw new Error('Account is not found');
    }
    console.log(account, password);
    const match = await bcrypt.compare(password, account.password);
    if (!match) {
        throw new Error('Password is wrong');
    }
    const jwt = signToken(account);
    console.log(jwt)
    return jwt;
}

module.exports = { getAll, create, login }