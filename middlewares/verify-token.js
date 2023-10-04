const jwt = require("jsonwebtoken");
const verifyToken = (req,res,next) => {
    const token=req.headers['authorization'];
    if(!token){
        res.status(403).json({message:"Chưa truyền token"});
    }
    try {
        const decoded=jwt.verify(token,"AnhTuanPham8a4NamTrumQuan8")
        req.user=decoded;
        return next();
    } catch (error) {
        return res.status(403).json({message:"Token không hợp lệ"});
    }
}

module.exports={verifyToken}