const express = require('express');
const { engine: expressHandlebars } = require('express-handlebars')
const handlers = require('./lib/handlers');

const app = express();
app.engine('handlebars',expressHandlebars({
    defaultLayout: 'main'
}));


app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'))
const port = process.env.PORT || 3001;


app.get('/', handlers.home);

app.get('/about', handlers.about);

app.use(handlers.notFound);

app.use(handlers.serverError);


if(require.main === module){
    app.listen(port, () => 
         console.log('Listening on port', port)
    );

}else{
    module.exports = app
}



