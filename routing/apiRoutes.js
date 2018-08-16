var friendData = require("../app/data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res){
        res.json(friendData);
    });
}
