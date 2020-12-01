const express = require('express');
var cors = require('cors');
let data = require('./data');

const app = express();
const port = process.env.PORT || 3001;

//middlewares
app.use(cors());

app.get('/', (request,response) => {
    response.send('Welcome to Image Quiz API');
});

app.get('/quizzes', (request,response) => {
    let metadata = data.quizzes.map(x => {
        return {id: x.id, name: x.name, picture: x.picture}
    });
    response.json(metadata);
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});