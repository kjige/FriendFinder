var friendsData = require('../data/friends.js');

module.exports = function (app) {

    app.get('/data/friends', function (req, res) {
        res.json(friendsData);
    });

    app.post('/data/friends', function (req, res) {
        friendsData.push(req.body);
        // res.json(req.body);
        // res.json(friendsData[0]);
    });
};