const { text } = require("body-parser");
const mongoose = require("mongoose");

//const { schema } = require("./secure/customersValidation");

const rezervSchema = new mongoose.Schema({


    customerid: { type: String },
    userid: { type: String },
    rezervdate: {
        type: Date,
    },
    rezervtime: {
        type: String,
    },
});

/*customersSchema.statics.customersValidation = function (body) {
    return schema.validate(body, { abortEarly: false });
};*/

module.exports = mongoose.model("Rezerv", rezervSchema);
