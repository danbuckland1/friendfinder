var friendData = require("../app/data/friends");

app.get("/api/friends", function(req, res){
    res.json(friendData);
});

app.post("/api/friends", function(req, res){
    
});

//Is this necessary?
app.post("/api/clear", function(){
    friendData = [];

    console.log(friendData);
})