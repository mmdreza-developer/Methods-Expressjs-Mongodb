const express = require("express")
const { GetUsers, GetUserById, PostUser, PutUser, DeleteUser } = require("../controllers/users.controller")

const UsersRouter = express.Router()

UsersRouter.get("/", GetUsers)
UsersRouter.get("/:userId", GetUserById)
UsersRouter.post("/", PostUser)
UsersRouter.put("/:userId", PutUser)
UsersRouter.delete("/:userId", DeleteUser)

module.exports = UsersRouter
