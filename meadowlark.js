const express = require('express');
const { engine: expressHandlebars } = require('express-handlebars')
const fortune = require('./lib/fortune');

const app = express();
app.engine('handlebars',expressHandlebars({
    defaultLayout: 'main'
}));


app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'))
const port = process.env.PORT || 3001;


app.get('/', (req, res) => {
    res.render('home');
});



app.get('/about', (req, res) => {
    res.render('about',{fortune:fortune.getFortune()});
});

// Página 404 personalizada
app.use((req, res, next) => {
    res.status(404);
    res.render('404');
});

// Página 500 personalizada
app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500);
    res.render('500');
});


app.listen(port, () => console.log('Listening on port', port));
