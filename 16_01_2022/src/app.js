const express = require('express');
const dotenv = require('dotenv');
const isLoggedIn = require('./middlewares/authorization.js');
const users = require('./data/users.js');

dotenv.config();

const app = express();

app.get('/', (req, res) => {    
    return res.json({
        status: 'OK'
    });
}); 

app.get('/users', isLoggedIn, (req, res) => {
    const { 
        limit = 5, 
        offset = 0 
    } = req.query;
    
    const result = users.slice(Number(offset), Number(offset)+Number(limit));
    return res.json(result);
});

app.post('/', isLoggedIn, (req, res, next) => {   
    console.log('Post method used');    
    return res.json({
        message: 'POST'
    });
});

app.use((error, req, res, next) => {
    const { code, message } = error;
    return res
        .status(code)
        .json({
            code,
            message
        });
});

const port = process.env.API_PORT || 3000;

app.listen(port, () => {
    console.log(`Listetning on http://localhost:${port}`);
});
