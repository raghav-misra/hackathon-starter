/* Imports */
const express = require('express');
const app = express();
const path = require('path');

/* Add Static Folder */
app.use(express.static(path.join(__dirname, "static")));

/* Set Up Handlebars */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

/* Routes */
app.get('/', (req, res) => {
    res.render('index', {
        greeting: "Hello! This text "
    });
});

/* Start Server @ :3000 */
app.listen(3000, () => console.log("Thanks for using this starter! Your server's up at port 3000."))

