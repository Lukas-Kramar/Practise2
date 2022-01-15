const dotenv = require('dotenv');
dotenv.config();

const { API_TOKEN: token} = process.env;

function isLoggedIn(req, res, next) {
    const tokenHeader = req.headers.authorization;    
        
    if (typeof tokenHeader !== 'undefined') {
        const tokenValue = tokenHeader.split(' ');
        if (tokenValue[1] === token) {             
            return next();
        };        
    }

    const error = new Error('UNAUTHORIZED');
    error.code = 401;
    return next(error);
} 

module.exports = isLoggedIn;
