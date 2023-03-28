const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const router = require('./router')

const db = require('./models')

const app = express();

app.use(express.json());
// console.log(router)

for (route of router.router) {
    app.use('/api', route)
}


app.listen(process.env.PORT, () => {
    // db.sequelize.sync({ alter: true })
    console.log(`Server running ${process.env.PORT}`)
})