let express = require('express')
const { AdminUserRoutes } = require('./Admin/WebAdminUser')
let AdminRoute = express.Router()




AdminRoute.use('/user',AdminUserRoutes)


module.exports={AdminRoute}