const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const index = require('./routes/index');


let port = process.env.PORT || 3000;

app.use(express.static('public'));
app.engine("hbs", handlebars({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set("view engine", "hbs");

app.use("/", index);

app.listen(port, ()=> {
  console.log(`Server running on http://localhost:${port}`);
});
