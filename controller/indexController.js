var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
// var mydata = require('/assets/results.json')
let array = []

exports.index = (req, res) => {
    // console.log("dit is de index function")
    // console.log('./public/assets/results.json')
    fs.readFile('./public/assets/results.json', (err , data) => {
        data = JSON.parse(data.toString())
        const filterData = filter2(data.data) 

        console.log(filter2(data.data).length)
        // const test =  JSON.parse(data.toString())
        console.log(filterData.length)
          res.render('index.ejs', {
              mydata: filterData
          });
    })
    // console.log(array)
}

exports.about = (req, res) => {
  res.render('about');
}

exports.notFound = (req, res) => {
  res.render('404');
}

exports.aboutPost = (req, res) =>{
    console.log('post')
 res.end(JSON.stringify(req.body))
}

function filter2(data){
    console.log(data)
    var filterData = data.slice(0,9);
    return filterData
}
