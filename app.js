const express = require('express');
const morgan = require('morgan');

//express app
const app = express();


//register view engine
app.set('view engine', 'ejs');


//listen for requests
app.listen(3000);

//middleware & static files
app.use(express.static('public'));

app.use(morgan('dev'));



app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'orem ipsum dolor sit amet consectetur adipisicing elit.'},
        {title: 'Mario finds stars', snippet: 'orem ipsum dolor sit amet consectetur adipisicing elit.'},
        {title: 'How to defeat bowser', snippet: 'orem ipsum dolor sit amet consectetur adipisicing elit.'},
    ];
    //res.send('<p>home page</p>');
    res.render('index', {title: 'Home', blogs});

});



app.get('/about', (req, res) => {
    //res.send('<p>about</p>');
    res.render('about', {title: 'About'});
});

//redirects
app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create'});
})

//404 page
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
})