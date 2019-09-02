const mongoose = require("mongoose");
 
mongoose.connect(
  "mongodb+srv://sensor_data:2vgHzDZRH5Z9NuU@devconnector-07kpo.mongodb.net/sensor_data?retryWrites=true&w=majority",
    { 
      useNewUrlParser: true
    }
  );
 
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Connected to MongoDB database")
});
 
module.exports = db;

//2vgHzDZRH5Z9NuU
//sensor_data
//mongodb+srv://sensor_data:2vgHzDZRH5Z9NuU@devconnector-07kpo.mongodb.net/test?retryWrites=true&w=majority/sensor_data