const expres = require('express');

const data = [
    {
        id: 1,
        name: 'Jason',
        gender: 'M',
        age: 27
    },
    {
        id: 2,
        name: 'Rosita',
        gender: 'F',
        age: 23
    },
    {
        id: 3,
        name: 'Leo',
        gender: 'M',
        age: 19
    }, 
    {
        id: 4,
        name: 'zAlice',
        age: 15,
        gender: 'F'
    },
    {
        id: 5,
        name: 'Zoe',
        age: 10,
        gender: 'F',
    },
    {
        id: 6,
        name: 'Timmy',
        age: 12,
        gender: 'M',
    },
    {
        id: 7,
        name: 'Michael',
        age: 31,
        gender: 'M',
    }
];
const app = expres();

app.get('/', (req, res) => {
    return res.json ({
        status: 'OK'
    });
});

app.get('/users/', (req, res, next) => {
    const { param, value } = req.query;    

    const user = data.filter((item) => String(item[param]).toLowerCase() === String(value).toLowerCase());
    if (user.length === 0) {
        const error = new Error('NOT FOUND');
        error.code = 404;
        return next(error);
    }

    return res.json ({
        status: 'OK',
        user
    });
});

app.use((error, req, res, next) => {
    const {code, message, stack} = error;
    return res
        .status(code)
        .json({
            code,
            message,
            stack,
        });    
});

app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});