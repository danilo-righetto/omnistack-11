const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.send('Hello World - Danilo - Omnistack 11');
});

app.listen(3333);