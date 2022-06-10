const mongoose = require("mongoose");

const webHookSchema = new mongoose.Schema({
    url:{
        type: String,
        required: true,
        unique: true,
    },
    token:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("webhook", webHookSchema);