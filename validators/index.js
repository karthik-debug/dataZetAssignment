const joi = require('joi');
const { modelName } = require('../models/weather');

const addWeatherDataValidator = joi.object().keys({
    city: joi.string().required(),
    minTemperature: joi.string().required(),
    maxTemperature: joi.string().required(),
    date: joi.date().required()
})

const getAllWeatherDataValidator = joi.object().keys({
    page: joi.number().required(),
    limit: joi.number().required()
})

const getDataFromToValidator = joi.object().keys({
    page: joi.number().required(),
    limit: joi.number().required(),
    from: joi.date().required(),
    to: joi.date().required()
})

const getAvgTempValidator = joi.object().keys({})

const getAvgTempByCityValidator = joi.object().keys({})

const getAvgTempByDateValidator = joi.object().keys({})

module.exports = {
    addWeatherDataValidator,
    getAllWeatherDataValidator,
    getDataFromToValidator,
    getAvgTempValidator,
    getAvgTempByCityValidator,
    getAvgTempByDateValidator
}

