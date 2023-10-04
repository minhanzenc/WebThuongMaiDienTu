const { Router } = require('express')
const route = Router({ mergeParams: true })

const { route: categoryRouter } = require("./category-route")
const { route: categoryGroupRouter } = require("./category-group-route");
const { route: bannerRouter } = require("./banner-route");
const { route: businessInfoRouter } = require("./business-info-route");
const { route: imageRouter } = require("./image-route");
const { route: partherRouter} = require("./parther-route");
const { route: productClassifyDetailRouter} = require("./product-classify-detail-route");
const { route: productDetailBatchRouter} = require("./product-detail-batch-route");
const { route: productDetailRouter} = require("./product-detail-route");
const { route: productImageRouter} = require("./product-image-route");
const { route: productRouter} = require("./product-route")
const { route: accountRouter} = require("./account-route")

route.use("/category", categoryRouter);
route.use("/category-group", categoryGroupRouter);
route.use("/banner", bannerRouter);
route.use("/business-info",businessInfoRouter);
route.use("/image", imageRouter);
route.use("/parther", partherRouter)
route.use("/product-classify-detail", productClassifyDetailRouter)
route.use("/product-detail-batch",productDetailBatchRouter)
route.use("/product-detail",productDetailRouter)
route.use("/product-image",productImageRouter)
route.use("/product",productRouter)
route.use("/account",accountRouter)

module.exports = route;