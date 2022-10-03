const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 255,
        min: 3,
    },
    vehicleNumber: {
        type: String,
        required: true,
        unique: true,
        min: 5,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    state: {
        type: Boolean,
    },
});

module.exports = mongoose.model('user', userSchema);
