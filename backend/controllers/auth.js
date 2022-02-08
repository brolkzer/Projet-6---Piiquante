const UserModel = require('../models/user');

module.exports.signUp = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.create({ email, password });
        res.status(201).json({ user: user._id});
    }
    catch (err) {
        res.status(404).json({ err });
    }
};