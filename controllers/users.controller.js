const { Users } = require("../models/users.model");

const GetUsers = async (req, res) => {
    const users = await Users.find()
    if (!users.length > 0) {
        res.status(400).json({
            message: "Not Found Users"
        })
    }
    console.log(users);
    res.send(users)
}

const GetUserById = async (req, res) => {
    const user = await Users.findById(req.params.userId)
    const result = await user.save()
    console.log(result);
    res.send(user)
}

const PostUser = async (req, res) => {
    const newUser = new Users({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        job: req.body.job,
        isCar: req.body.isCar
    })
    await newUser.save()
    res.send(newUser)
}

const PutUser = async (req, res) => {
    const user = await Users.findByIdAndUpdate(req.params.userId, {
        $set: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            job: req.body.job,
            isCar: req.body.isCar
        }
    }
        , {
            new: true
        })
    if (!user) {  
        res.status(404).send({ message: "Not Found User" })
    } else {
        await user.save()
        console.log(user);
        res.send(user)
    }

}

const DeleteUser = async (req, res) => {
    const user = await Users.findOneAndDelete({ _id: req.params.userId })
    if (!user) {
        res.status(404).send({ message: "Not Found User" })
    }
    console.log(user);
    user.save()
    res.send(user)
}

module.exports = {
    GetUsers,
    GetUserById,
    PostUser,
    PutUser,
    DeleteUser
}