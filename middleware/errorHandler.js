const { logEvents } = require('./logEvents');

const errorHandler = (err,req, res, next) => {
    logEvents(`${err.name} : ${err.message}`, 'errLog.txt')
    console.error(err.stack)
    res.status(500).send(err.message) //the error which is thrown in the corsOptions-callback function is sent as response here to page//
    next()
}

module.exports = errorHandler;

