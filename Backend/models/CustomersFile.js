const { text } = require("body-parser");
const mongoose = require("mongoose");

const { schema } = require("./secure/customersfileValidation");

const customersfileSchema = new mongoose.Schema({

    fullname: {
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
    image: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Multimedia',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
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

customersfileSchema.statics.customersfileValidation = function (body) {
    return schema.validate(body, { abortEarly: false });
};

module.exports = mongoose.model("Customersfile", customersfileSchema);
