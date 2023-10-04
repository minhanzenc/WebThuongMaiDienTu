const bannerRepo =require("../repositories/banner-repo");

const getAll = () => {
    return bannerRepo.getAll();
};

const create = (body) => {
    return bannerRepo.create(body);
};

module.exports = {getAll, create};