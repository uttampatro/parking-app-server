const User = require('../entity/User');

const createUser = async ({ name, vehicleNumber, state }) => {
    const user = new User({
        name,
        vehicleNumber,
        state,
    });
    await user.save();
    return user;
};

const fetchAllUser = async () => {
    const users = await User.find();
    return users;
};

const fetchAllUserInGarage = async () => {
    const users = await User.find().where({ state: true });
    return users;
};

const removeUser = async _id => {
    const user = await User.findById(_id);
    user.state = false;
    user.updatedAt = new Date()
    await user.save();
    return user;
};

module.exports = { createUser, fetchAllUser, removeUser, fetchAllUserInGarage };
