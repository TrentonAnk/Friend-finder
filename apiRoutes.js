
var surveyData = require("/surveyData");





module.exports = function(app) {
 

  app.get("/api/friends", function(req, res) {
    res.json(surveyData);
  });


  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    if (surveyData.length < 5) {
      surveyData.push(req.body);
      res.json(true);
    }
    
  });

    console.log(surveyData);
  
};
