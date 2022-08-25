const express = require("express")
var cors = require('cors')
const app = express();
const router = require("./routes/Routes")
app.use(express.json())
app.use(cors())
app.use("/room",router)






app.listen(3000,()=>{
    console.log('this server runs on port 3000 !!!!')
})