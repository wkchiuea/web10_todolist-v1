

const express = require("express");
const date = require(__dirname + "/date.js");

const app = express();
app.set("view engine", ejs); // set view engine to use ejs
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

var items = [];
var workItems = [];

app.get("/", function(req, res) {

    let day = date();

    // assume views directory exist and containing list.ejs
    // use render instead of sendFile
    res.render("list", {
        listTitle: day,
        newListItems: items,
    });

});

app.get("/work", (req, res) => {
    res.render("list", {
        "listTitle": "Work List",
        "newListItems": workItems
    });
});

app.post("/", function(req, res) {

    var item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }

});

app.listen(3000, function() {
    console.log("Server started on port 3000.");
});
