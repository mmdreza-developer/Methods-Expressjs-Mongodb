const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/Friends")
    .then(() => console.log("MongoDB Connected ..."))
    .catch((err) => console.log(err.message))

const userSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    job: { type: String, required: true },
    isCar: { type: String, default: false },
})

const Users = mongoose.model("Users", userSchema)


module.exports = {
    Users
}