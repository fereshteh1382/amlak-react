const { text } = require("body-parser");
const mongoose = require("mongoose");

//const { schema } = require("./secure/customersfileValidation");

const customersfileSchema = new mongoose.Schema({

    category: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 100,
    },
    city: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 100,
    },
    range: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 100,
    },
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 100,
    },
    meterage: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 100,
    },
    images: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Multimedia',
        required: true
    },
    price: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 100,
    },
    rooms: {
        type: String,
        default: "0",
        enum: ["1", "2", "3", "4", "5"]
    },
    yearconstruction: {
        type: String,
        default: "1402",
        enum: ["1401", "1400", "1399", "1398", "1397", "1396", "1395", "1394", "1393", "1392", "1391", "1390"]
    },
    floor: {
        type: String,
        default: "0",
        enum: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    },
    elevator: {
        type: String,
        default: "yes",
        enum: ["yes", "no"],

    },
    parking: {
        type: String,
        default: "yes",
        enum: ["yes", "no"],

    },
    warehouse: {
        type: String,
        default: "yes",
        enum: ["yes", "no"],

    },
    address: {
        type: String,
        required: false,
        trim: true,
        minlength: 5,
        maxlength: 100,
    },
    desc: { type: String },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        type: String,
        ref: 'Customers',
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        default: "public",
        enum: ["private", "public"],
    },

    /* 
     image: { type: Schema.Types.ObjectId,
         ref: 'Multimedia', required: true
     },
     thumbnail: {
         type: String,
          required: true,
     },*/


});

/*customersfileSchema.statics.customersfileValidation = function (body) {
    return schema.validate(body, { abortEarly: false });
};*/

module.exports = mongoose.model("Customersfile", customersfileSchema);
