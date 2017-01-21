var friendsData = require('../data/friends.js');

module.exports = function (app) {

    app.get('/data/friends', function (req, res) {
        res.json(friendsData);
    });

    app.post('/data/friends', function (req, res) {
        var user = req.body;
        // for (var i = 0; i < user.scores[].length; i++) {
        //     user.scores[i] = parseInt(user.scores[i]);
        // }

        friendsData.push(user);
        res.send(req.body);
    });
};