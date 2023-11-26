const express = require("express");
const UsersRouter = require("./routers/users.router");


const app = express()

app.use((req, res, next) => {
    next()
    console.log(`Request Method :${req.method} url: ${req.url}`);
})

const PORT = 4000

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Listening to PORT : ${PORT}`);
})

app.use("/users", UsersRouter)
