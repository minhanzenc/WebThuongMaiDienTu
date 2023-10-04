const jwt = require("jsonwebtoken");

const signToken = (user) =>{
    const token = jwt.sign(
        {id: user.id, email:user.email, role:user.role},
        "AnhTuanPham8a4NamTrumQuan8",
        {
            expiresIn:24*60*60*60,
        }
    );
    return token;
};
module.exports = {signToken};