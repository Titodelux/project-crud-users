const express = require("express")
const app = express()
const userRouter = require('./users/users.router')

const port = 9008

app.use(express.json())
app.use('/api/v1', userRouter)

app.get('/', (req, res)=>{
    res.status(200).json({
        message: "Connected Successful"
    })
})

app.listen(port, () => {
    console.log("Server started at port:", port);
})
