const express = require("express");
const app = express();

mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const webhookRoute = require("./routes/webhook");


const PORT = process.env.PORT || 9876;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

/**
 * Database connection. 
 */
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB connection successful"))
.catch((err) => {
    console.log(err);
});

/**
 * Routes.
 */
app.get("/", (req, res) => {
    let message = "Sever running successfully";
    res.status(200).json(message);
});

app.use("/api/webhook/", webhookRoute);


app.listen(PORT, () => {
    console.log(`app listening at http://localhost:${PORT}`)
});