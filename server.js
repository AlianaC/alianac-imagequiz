const express = require('express');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

//middlewares
app.use(cors());

app.get('/', (request,response) => {
    response.send('Welcome to Image Quiz API');
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});