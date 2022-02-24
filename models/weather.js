const mongoose = require("mongoose"),
     Schema = mongoose.Schema

const number = require("joi/lib/types/number");
const mongoosePaginate = require("mongoose-paginate-v2");
const weatherSchema = new Schema({
    city: {
        type: String
    },
    minTemperature: {
        type: Number
    },
    maxTemperature: {
        type: Number
    },
    date: {
        type: Date
    }
})
weatherSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("weather", weatherSchema);