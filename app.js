const express = require("express");
const app = express();
const port = 8087;
const path = require("path");

app.get("/", function (req, res) {
    res.status(200).sendFile(path.join(__dirname, "index.html"));
});

app.get("/contact-me", function (req, res) {
    res.status(200).sendFile(path.join(__dirname, "contact-me.html"));
});

app.get("/about", function (req, res) {
    res.status(200).sendFile(path.join(__dirname, "about.html"));
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
