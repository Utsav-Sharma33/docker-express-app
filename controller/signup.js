const User = require('../model/user');

export const signUp = async (req, res, next) => {
    const user = req.body;
    console.log("user", user);
    if (user.email && user.password) {
        const doc = await User.create(user);
        res.send(doc);
    }
}