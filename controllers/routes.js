const path = require('path');

module.exports = function (app)  {
  // Main "/" Route. This will redirect the user to our rendered React application
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // This is the route we will send GET requests to retrieve our most recent click data.
  // We will call this route the moment our page gets rendered
  app.get("/api/search", function(req, res) {
    // This GET request will search for the latest clickCount
    Search.find({}, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          res.send(doc);
        }
    });
  });

  // This is the route we will send POST requests to save each click.
  // We will call this route the moment the "click" or "reset" button is pressed.
  app.post("/api/search", function(req, res) {

    const searchResul = {
      search : req.body.search,
      result : req.body.result,
    };

    // Note how this route utilizes the findOneAndUpdate function to update the clickCount
    // { upsert: true } is an optional object we can pass into the findOneAndUpdate method
    // If included, Mongoose will create a new document matching the description if one is not found
    Search.create(req.body, { new: true }).exec(function(err, search) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(search);
      }
    });
  });
}
