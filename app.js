

const express = require("express");
const app = express();
app.use("view engine", ejs); // set view engine to use ejs

app.get("/", function(req, res) {

    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tueday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            break;
    }

    // assume views directory exist and containing list.ejs
    // use render instead of sendFile
    res.render("list", {
        kindOfDay: day
    });

});

app.listen(3000, function() {
    console.log("Server started on port 3000.");
});
