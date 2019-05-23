var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var localStorage = require('localStorage');
// var mydata = require('/assets/results.json')
let array = []


// get data
exports.index = (req, res) => {
    fs.readFile('./public/assets/results.json', (err, data) => {
        data = JSON.parse(data.toString())
        slicedData = filter2(data.data);
        //render file + data
        res.render('index.ejs', {
            mydata: slicedData
        });
    })
}

exports.offline = (req, res) =>{
    res.render('offline')
}

exports.about = (req, res) => {
    res.render('about');
}

exports.notFound = (req, res) => {
    console.log('error from notfound:   ' + res.err)
    res.render('404');
}
exports.detail = (req, res) => {
    getBookById(req.params.id, res)

}

function getBookById(id, res) {
    fs.readFile('./public/assets/results.json', (err, data) => {
        data = JSON.parse(data.toString())
        // console.log(data.data[0].isbn)
        console.log("Dit is de id van detail:" + id)
        data.data.forEach(book => {
            if (book.isbn === '=' + id) {
                console.log('Entered DetailSite: ' + book.title)
                res.render('detail', {
                    mydata: book
                });
            }
        })
    })
}

function filter2(data) {
    // console.log(data)
    var filterData = data.slice(0, 9);
    return filterData
}
