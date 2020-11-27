const express = require('express');
    const router = express.Router();
    var io = require('socket.io')();

    // Path to your JSON file, although it can be hardcoded in this file.
    const dummyData = require('../../data/pr10-data.json')

    router.get('/', (req, res, next) => {
        res.render('pages/pr11VIW', {
            title: 'Prove 11',
            path: '/pr11',
        });
    });
    /*app.get('/', (req, res) => {
        res.sendFile(__dirname + 'pages/pr11VIW');
      });*/

    router.get('/fetchAll', (req, res, next) => {
        res.json(dummyData);
        //dummyData.fetch()
    });

    router.post('/insert', (req, res, next) => {
    /************************************************
     * INSERT YOUR WEB ENDPOINT CODE HERE
     ************************************************/
    //function insertHero(dummyData) {
        const avenger = req.body.newAvenger;
        const power = req.body.newPower;
        let dupe = false;
        for (let a of dummyData.avengers)
        {
            if (a.name == avenger)
            {
                if (a.power != power)
                {
                    a.power = power;
                }
                dupe = true;
            }
        }
        if (!dupe)
        {
            dummyData.avengers.push({name: avenger,
            power: power})
        }
        res.json(dummyData);
    //}
    //console.log(dummyData);
    });

    module.exports = router;