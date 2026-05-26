
const mongoose = require('mongoose');
let express = require('express')

require('dotenv').config()
let cors = require('cors');
const { AdminRoute } = require('./App/Routes/AdminRoutes');

let App = express()

App.use(cors())
App.use(express.json())

App.use('/admin', AdminRoute)
// App.use('/website', WebsiteRoute)

App.get("/" , (req , res)=>{
    res.send("hello")
})
// App.use('/upload-files/cartimages', express.static('upload-files/cartimages'))

mongoose.connect(process.env.DBCONACTION)


    .then((res) => {

        App.listen(process.env.PORT || 8000, async () => {
            console.log('server start', process.env.PORT)

            
        })
    })


