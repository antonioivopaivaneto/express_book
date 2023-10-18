const express = require('express');
const { engine: expressHandlebars } = require('express-handlebars')

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

const fortunes=[
    "orem   dolor sit amet, consectetur adip",
    "lorem ipsum dolor sit amet, con",
    "ipsun  sit amet, consectetur adip",
    "amet, consectetur adip",
]

app.get('/about', (req, res) => {
    const randomFortune =fortunes[Math.floor(Math.random()*fortunes.length)]
    res.render('about',{fortune:randomFortune});
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
