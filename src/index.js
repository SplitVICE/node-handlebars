const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();

// SETTINGS

// Engine settings
// https://www.npmjs.com/package/express-handlebars
// views folder edited because src folder is being used
app.set('views', path.join(__dirname, './views'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// ROUTES
app.use("/", (req, res) =>{
    res.render('home.handlebars',{
        foo: 'bar'
    });
});

const PORT = '8080';

app.listen(PORT, () =>{ console.log(`Node Handlebars running at port ${PORT}`); });