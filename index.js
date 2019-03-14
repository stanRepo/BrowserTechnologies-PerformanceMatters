(function(){
    
    var express = require('express');
    var app = express();
    var searchBook = require('./public/js/tasks/search') 

    // setup template engine
    app.set('view engine', 'ejs');

    // access static file path
    app.use(express.static('public'));
   
    
    // get routes
    app.get('/', (req, res) =>{
        console.log('route home')
        res.render('./pages/index')
    });

    app.get('/oba-ar', (req, res) =>{
        console.log('rendered oba-ar route')
         
        res.render('./pages/ar');
    });

    // app.get('/detail/:id', (req, res) =>{
    //     console.log('rendered oba-ar route')
         
    //     res.render('./pages/detail');
    // });

    app.get('*', (req, res) =>{
        console.log('rendered 404 route')
        res.render('./pages/404');
    });


    // listen to port
    console.log('the server has been restarted')
    app.listen(8080);
}())