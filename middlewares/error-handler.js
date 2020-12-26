const { GeneralError } = require('../utility/error');

const errorHandler = (err, req, res, next) => {
    if (err instanceof GeneralError) {
        return res.status(err.getCode()).json({
            message: err.message
        });
    }

    return res.status(500).json({
        message: err.message
    });
}

module.exports = errorHandler;