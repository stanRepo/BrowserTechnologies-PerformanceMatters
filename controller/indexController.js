var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var localStorage = require('localStorage');
// var mydata = require('/assets/results.json')
let array = []

exports.index = (req, res) => {

    var myStorage = myLocalStorage()


    // console.log('found data = ' + myStorage);
    if (myStorage === false) {
        fs.readFile('./public/assets/results.json', (err, data) => {
            try {
                const currentStorage = filter2(data.data)
                data = JSON.parse(data.toString())
                console.log('new currentStorage length =' + currentStorage.length)

                localStorage.setItem('data', JSON.stringify(data.data))

                // render file + data
                res.render('index.ejs', {
                    mydata: currentStorage
                });

            } catch (err) {
                console.log('error during data retrievement = ' + err)
            }
        })
    } else {

        var data = localStorage.getItem('data');
        var currentStorage = JSON.parse(data);
        //console.log(currentStorage);
        console.log('old currentStorage length: ' + data.length);

        // render file + data
        res.render('index.ejs', {
            mydata: currentStorage
        });
    }
    // console.log(array)
}

exports.about = (req, res) => {
    res.render('about');
}

exports.notFound = (req, res) => {
    res.render('404');
}

exports.aboutPost = (req, res) => {
    console.log('post')
    res.end(JSON.stringify(req.body))
}

function filter2(data) {
    // console.log(data)
    var filterData = data.slice(0, 9);
    return filterData
}

function myLocalStorage() {
    var currentStorage = localStorage.getItem('data');
    //   console.log('value of getItem = ' + currentStorage);
    if (currentStorage === null || currentStorage === undefined) {
        console.log('returned value = ' + false)
        return false;
    } else {
        console.log('returned value = ' + true)
        return true;
    }
}