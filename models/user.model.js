const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    id: {
        type: String,
        reuire: true,
    },
    name: {
        type: String,
        reuire: true,
    },

    billid: {
        type: Number,
        reuire: true,
    },

    billtype: {
        type: String,
        reuire: true,
    },

    date: {
        type: Date,
        default: Date.now,
    },
   


});


module.exports = mongoose.model("User",
userSchema);