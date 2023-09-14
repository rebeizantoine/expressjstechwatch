const express = require("express");
const app = express();

const port = 3002;

const cors = require("cors");

//Middleware Setup

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {


    res.send("This is working!");
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);

});

//taskkill /F /IM node.exe

