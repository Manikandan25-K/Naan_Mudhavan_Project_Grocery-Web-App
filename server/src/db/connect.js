const mongoose = require("mongoose");
// Middleware
const db = 'mongodb+srv://data:data@cluster0.ffktd.mongodb.net/data?retryWrites=true&w=majority&appName=Cluster0'

// Connect to MongoDB using the connection string
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {
  console.log(`No connection: ${e}`);
});

// mongodb://localhost:27017