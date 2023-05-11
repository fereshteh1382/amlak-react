const { text } = require("body-parser");
const mongoose = require("mongoose");

const { schema } = require("./secure/customersValidation");

const customersSchema = new mongoose.Schema({

    fullname: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 100,
    },
    tel: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 100,
    },
    adress: {
        type: String,
        required: false,
        trim: true,
        minlength: 5,
        maxlength: 100,
    },
    desc: { type: String },
    /* parent: {
          type: mongoose.Schema.Types.ObjectId,
         type: String,
          ref: 'Category',
           required: true
     },
     image: { type: Schema.Types.ObjectId,
         ref: 'Multimedia', required: true
     },
     thumbnail: {
         type: String,
          required: true,
     },*/
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

});

customersSchema.statics.customersValidation = function (body) {
    return schema.validate(body, { abortEarly: false });
};

module.exports = mongoose.model("Customers", customersSchema);
