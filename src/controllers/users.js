const {
    createUser,
    fetchAllUser,
    removeUser,
    fetchAllUserInGarage,
} = require('../services/userService');

const creatingUser = async (req, res) => {
    try {
        const id = req.body.id;
        const name = req.body.name;
        const vehicleNumber = req.body.vehicleNumber;
        const state = true;
        const user = await createUser({
            name,
            vehicleNumber,
            state,
        });
        return res.json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

const getAllUser = async (req, res) => {
    try {
        const userList = await fetchAllUser();
        return res.json(userList);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

const getAllUserInGarage = async (req, res) => {
    try {
        const userList = await fetchAllUserInGarage();
        return res.json(userList);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

const removingUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await removeUser({
            _id: id,
        });
        return res.json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

module.exports = { creatingUser, getAllUser, removingUser, getAllUserInGarage };
