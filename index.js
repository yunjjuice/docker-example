const express = require('express')

const app = express();

app.get('/', (req, rest) => {
    rest.send('hihi');
});

app.listen(8080, () => console.log('Server is running'));