const Weather = require('../models/weather');

const addWeatherData = async (req, res) => {
    const weather = new Weather(req.body)
    await weather.save()
    res.status(200).json({ message: 'Saved'})
}

const getAllWeatherData = async (req, res) => {
    const options = {
        page: req.body.page,
        limit: req.body.limit,
        lean: true,
    };
    let weatherData = await Weather.paginate({},options);
    res.status(200).json(weatherData);
}

const getDataFromTo = async (req, res) => {
    const options = {
        page: req.body.page,
        limit: req.body.limit,
        lean: true,
    };
    let weatherData = await Weather.paginate({date: { $gte: req.body.from, $lte: req.body.to }},options);
    res.status(200).json(weatherData);
}

const getAvgTemp = async (req, res) => {
  const pipeline = [
        {"$match": { } },
        {
            "$group": {
                "_id": null,
                "avgMinTemperature": { "$avg": "$minTemperature" },
                "avgMaxTemperature": { "$avg": "$maxTemperature" },
            }
        }
    ];

    let weatherData = await Weather.aggregate(pipeline)
    res.status(200).json(weatherData);
}

const getAvgTempByCity = async (req, res) => {
    const pipeline = [
          {"$match": { } },
          {
              "$group": {
                  "_id": "$city",
                  "avgMinTemperature": { "$avg": "$minTemperature" },
                "avgMaxTemperature": { "$avg": "$maxTemperature" },
                  
              }
          }
      ];
  
      let weatherData = await Weather.aggregate(pipeline)
      res.status(200).json(weatherData);
  }

const getAvgTempByDate = async (req,res) => {
    const pipeline = [
        {"$match": { } },
        {
            "$group": {
                "_id": "$date",
                "avgMinTemperature": { "$avg": "$minTemperature" },
              "avgMaxTemperature": { "$avg": "$maxTemperature" },
                
            }
        }
    ];

    let weatherData = await Weather.aggregate(pipeline)
    res.status(200).json(weatherData);
}
module.exports = {
    addWeatherData,
    getAllWeatherData,
    getDataFromTo,
    getAvgTemp,
    getAvgTempByCity,
    getAvgTempByDate
}