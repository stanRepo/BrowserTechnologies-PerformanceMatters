(function () {

    var express = require('express');
    var app = express();
    bodyParser = require('body-parser')
    var request = require('request');
    var fs = require('fs')
    var path = require('path');
    var router = require('./router/router');
   
   
   
   
    // setup template engine
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views/pages'));

    // access static file path
    app.use(express.static('public'));


    // use bodyparser
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json())

    // use router to handle  all requests
    app.use('/', router);
    
    // listen to port
    console.log('PORT 8080 | Server Started')
    app.listen(8080);
    }())


    // get routes
    // app.get('/', (req, res) => {


        // console.log('route home')
        // res.render('./pages/index', {
        //     mydata: data
        // })
 
    // app.get('/', (req, res) => {
    //     res.render('./pages/ar', {
    //     //     mydata: data
    //     // })
    //     // console.log('rendered oba-ar route')

    // });


    // app.get('/oba-ar:id', (req, res) => {

    // })

    // app.get('/detail/:id', (req, res) =>{
    //     console.log('rendered oba-ar route')

    //     res.render('./pages/detail');
    // });

    // app.get('*', (req, res) =>{
    //     console.log('rendered 404 route')
    //     res.render('./pages/404');
    // });

