'use strict';

const express = require('express');
const cors = require('cors');
const csv = require('csv-parser');
const fs = require('fs');

// Constants
const PORT = 3003;
const HOST = '0.0.0.0';

let players = []
const parseCsv = () => {
    fs.createReadStream('players.csv')
    .pipe(csv())
    .on('data', (row) => {
      players.push(row)
    })
}
parseCsv();

const app = express();
app.use(cors())

app.get('/', (req, res) => {
    res.send("-=[ Players API ]=-")
});

app.get('/players', (req, res) => {
    const result = players.map(player => ({
                                                playerId: player.playerId, 
                                                name: player.firstName + " " + player.lastName,
                                                goal: player.goal
                                         }));
    res.send(result)
});

app.get('/players/:playerId', function (req, res) {
    const result = players.filter(player => player.playerId === req.params.playerId);
    res.send(result)
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);