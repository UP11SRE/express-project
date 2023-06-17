//console.log("I am in express Project");

const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const connectDb = require("./config/dbConnection");

const dotenv = require("dotenv").config();

//connectDb();

connectDb();

const app = express();

const port =  process.env.port || 5000;

app.use(express.json());

app.use("/api/contacts",require("./routes/contactRoutes"));
app.use("/api/users",require("./routes/userRoutes"));

app.use(errorHandler);


app.listen(port,  () => {
    
    console.log(`server is running on the ${port}`);
});