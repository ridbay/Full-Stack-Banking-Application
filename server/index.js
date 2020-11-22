const express = require("express");
const authRoute = require("./routes/auth");
require("dotenv").config();
const cors = require("cors")
const app = express();

const PORT = process.env.PORT || 5000;

//Get data coming from the client as JSON 
app.use(express.json());
app.use(cors())
app.use(authRoute);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
