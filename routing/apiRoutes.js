var friendArray = require("../app/data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendArray);
  });

  app.post("/api/friends", function(req, res) {
    var userData = req.body.scores;
    var scoreArray = [];
    var friendCount = 0;
    var friendMatch = 0;

    for (var i = 0; i < friendArray.length; i++) {
      var totalDiff = 0;

      for (var j = 0; j < userData.length; j++) {
        totalDiff += Math.abs(
          parseInt(friendArray[i].scores[j]) - parseInt(userData[j])
        );
      }

      scoreArray.push(totalDiff);
    }

    for (var i = 0; i < scoreArray.length; i++) {
      if (scoreArray[i] <= scoreArray[friendMatch]) {
        friendMatch = i;
      }
    }

    var newFriend = friendArray[friendMatch];
    res.join(newFriend);

    friendArray.push(req.body);
  });
};
