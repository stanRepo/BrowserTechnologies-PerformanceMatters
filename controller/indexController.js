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
            data =  JSON.parse(data.toString())
            try {
                const currentStorage = filter2(data.data)


                console.log('new currentStorage length =' + currentStorage.length)
               // console.log(data)

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

        const data = localStorage.getItem('data');
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
exports.detail = (req, res) => {
    getBookById(req.params.id, res)
    
}

function getBookById(id, res){
    fs.readFile('./public/assets/results.json', (err, data) => {
        data =  JSON.parse(data.toString())
        // console.log(data.data[0].isbn)
        console.log("Dit is de id van detail:"+id)
    data.data.forEach(book =>{
        if(book.isbn === '=' + id){
            console.log(book)
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