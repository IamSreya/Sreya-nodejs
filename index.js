const express = require("express")
const app = express()

app.get("/check",(request,response) => {
    response.send("Health is ok")
})

app.listen(3000,(request,response) => {
    console.log("server is running on port 3000")
})