const express = require('express');
const app = express();

const fetch = require('node-fetch');
const cors = require('cors');

const corsOption = {
    origin: 'https://amami0522.github.io',
    origin: 'http://localhost:8080'
}

app.use(cors(corsOption));

app.set('port', (process.env.PORT || 3000));

app.get('/api/result/', function(request, response) {
    fetch("https://atcoder.jp/users/mitsui321/history/json")
    .then(res => {
        return res.json();
    })
    .then(json => {
        response.send(json);
    })
});

app.listen(app.get('port'), function() {
    console.log('Listening on ' + app.get('port'));
});