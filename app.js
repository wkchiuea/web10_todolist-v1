

const express = require("express");
const app = express();
app.set("view engine", ejs); // set view engine to use ejs
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

var items = [];

app.get("/", function(req, res) {

    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    // assume views directory exist and containing list.ejs
    // use render instead of sendFile
    res.render("list", {
        kindOfDay: day,
        newListItems: items,
    });

});

app.post("/", function(req, res) {
    var item = req.body.newItem;
    items.push(item);

    res.redirect("/");

});

app.listen(3000, function() {
    console.log("Server started on port 3000.");
});
