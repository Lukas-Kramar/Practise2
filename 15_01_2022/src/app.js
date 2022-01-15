// Nahrajeme balíček EXPRESS
const express = require('express');

// Vyrobíme express aplikaci zavolním funkce express();
const app = express();

// Data nahraná z databáze uživatelů
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

app.get('/users', (req, res) => {
    res.json({
        status: 'OK',
        data,
    })
});

// http://localhost:3000/users/ID_UZIVATELE -> ID je předáno jako PARAM
app.get('/users/:id', (req, res, next) => {
    // const id = req.params.id; -> lze napsat destrukcí viz řádek 65
    const { id } = req.params;

    // Vyfiltrujeme konkrétní záznam dle jeho ID
    const result = data.filter((item) => item.id === Number(id));

    // Pokud je délka pole 0 (=> nejsou žádné hodnoty)
    if (result.length === 0) {
        // Připravíme error object
        const error = new Error('NOT FOUND');
        
        // Nastavíme stavový HTTP kód
        error.code = 404;

        // Přesuneme se do ERROR middlewaru
        return next(error);
    }

    // vrátíme výsledek
    res.json({
        status: 'OK',
        result,
    });

});

// http://localhost:3000/users2/?id=2 -> ID je součásti QUERY STRINGU
app.get('/users2/', (req, res, next) => {
    // const id = req.query.id; -> lze napsat destrukcí viz řádek 91
    const { id } = req.query;

    if (!id) {
        const error = new Error('FORBIDDEN');
        error.code = 403;
        return next(error);
    }

    // Vyfiltrujeme konkrétní záznam dle jeho ID
    const result = data.filter((item) => item.id === Number(id));

    // Pokud je délka pole 0 (=> nejsou žádné hodnoty)
    if (result.length === 0) {
        // Připravíme error object
        const error = new Error('NOT FOUND');
        
        // Nastavíme stavový HTTP kód
        error.code = 404;

        // Přesuneme se do ERROR middlewaru
        return next(error);
    }

    // vrátíme výsledek
    res.json({
        status: 'OK',
        result,
    });

});

app.use((error, req, res, next) => {
    return res
        // Nastavíme příslušný stavový kód
        .status(error.code)
        // Vrátíme JSON odpověď
        .json({
            msg: error.message,
            code: error.code,
        });
});

app.listen(3000, () => { 
    console.log('Listening on http://localhost:3000');
});
