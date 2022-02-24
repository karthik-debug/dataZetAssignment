const joi = require('joi');

const validateMiddleware = (schema,key) => (req, res, next) => {
    const data = req[key]
    joi.validate(data, schema,(err, value) => {
        if (err) {
          res.status(422).json({
            status: 'error',
            message:err.details
          });
        } else { 
          next()
        }
      });
}


module.exports = {
    validateMiddleware
}