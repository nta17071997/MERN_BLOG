const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

//CONNECT MONGODB
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MONGODB Connected."))
  .catch((err) => console.log(err));

//MODEL IMPORT
require("./models/category");
require("./models/post");
require("./models/comment");

app.use(express.json());

//ROUTE IMPORT
app.use(require("./routes/post"));
app.use(require("./routes/category"));
app.use(require("./routes/comment"));

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
