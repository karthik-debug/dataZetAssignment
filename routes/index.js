const router = require('express').Router()

const {
    validateMiddleware
} = require('../middlewares')

const {
    addWeatherData,
    getAllWeatherData,
    getDataFromTo,
    getAvgTemp,
    getAvgTempByCity,
    getAvgTempByDate
} = require('../controllers')

const {
    addWeatherDataValidator,
    getAllWeatherDataValidator,
    getDataFromToValidator,
    getAvgTempValidator,
    getAvgTempByCityValidator,
    getAvgTempByDateValidator
} = require('../validators')

router.post('/addWeatherData', validateMiddleware(addWeatherDataValidator, 'body'),addWeatherData)

router.post('/getAllWeatherData', validateMiddleware(getAllWeatherDataValidator, 'body'),getAllWeatherData )

router.post('/getDataFromTo', validateMiddleware(getDataFromToValidator, 'body'),getDataFromTo )

router.post('/getAvgTemp', validateMiddleware(getAvgTempValidator, 'body'),getAvgTemp )

router.post('/getAvgTempByCity', validateMiddleware(getAvgTempByCityValidator, 'body'),getAvgTempByCity )

router.post('/getAvgTempByDate', validateMiddleware(getAvgTempByDateValidator, 'body'),getAvgTempByDate )

module.exports = router