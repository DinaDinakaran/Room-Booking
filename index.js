const express = require("express")
var cors = require('cors')
require('dotenv').config()

const app = express();
const router = require("./routes/Routes")
app.use(express.json())
app.use(cors())
app.use("/room",router)



const port =process.env.PORT


app.listen(port,()=>{
    console.log(`this server runs on port ${port}  !!!!`)
})