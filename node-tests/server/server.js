const express = require('express');

var app = express();

app.get('/', (req, res) => {
    // res.send('hello world!');
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});


//get /users
// give users name and age prop.
app.get('/users', (req, res) => {
    res.send([{
            name: 'can',
            age: 22
        },
        {
            name: 'patrick',
            age: 25
        },
        {
            name: 'fioana',
            age: 21
        }
    ]);
});

app.listen(3000);

module.exports.app = app;