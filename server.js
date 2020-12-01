const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
let data = require('./data');

const app = express();
const port = process.env.PORT || 3001;

//middlewares
app.use(cors());
app.use(bodyParser.json());

app.get('/', (request,response) => {
    response.send('Welcome to Image Quiz API');
});

app.get('/quizzes', (request,response) => {
    let metadata = data.quizzes.map(x => {
        return {id: x.id, name: x.name, picture: x.picture}
    });
    response.json(metadata);
});

app.get('/quiz/:id', (request,response) => {
    let requestedId = request.params.id;
    let found = data.quizzes.find(x => x.id === Number(request.params.id));

    if(found){
        response.json(found.questions);
    }else{
        response.status(404).json({error: `The quiz with id ${requestedId} was not found`});
    }
});

app.post('/score', (request,response) => {
    let username = request.body.username;
    let quizid = request.body.quizid;
    let score = request.body.score;
    data.scores.push({username: username, quizid: quizid, score: score});
    response.json({message: "Score successfully saved"});
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});