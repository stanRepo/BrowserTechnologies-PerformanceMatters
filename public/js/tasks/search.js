// (function () {
//     var submit = document.getElementById('i-button')
//     submit.addEventListener('click', collectAsync)
// }())


async function collectAsync() {
    await getData();
}

function getData() {


    return new Promise((resolve, reject) => {
        fetch('/assets/results.json')
            .then(function (response) {
                return response.json();
            })
            .then((res) => {
                console.log(res)
                filterResults(res);
            
            })

            .then((res) =>{
                console.log(res);
                resolve(res);

            })
            .catch((err) => {
                console.log(err);
                reject(err)
            })
    });
}


function filterResults(res) {
    return new Promise((resolve, reject) =>{

    var query = new String(document.querySelector('#i-text').value);
    var option = document.querySelector('#options').value;
    var optionArray = ['Title', 'Author', 'ISBN']

    console.log('the query = ' + query);

    // check if option matches key of data
   
        for (var z = 0; 0 < optionArray.length; z++) {
            if (option == optionArray[z]) {
                option = option.toLowerCase();
                console.log('You selected the filter    ' + option)
                templator(res, query, option)
            }
        }
    } 
    )}
    

    function templator(res, query, option) {
        
        if (option == "title") {
            for (var i = 0; i < 10; i++) {
                var fullSubject = res.data[i];
                var subject = res.data[i].title.toLowerCase();
                var templateResult = document.querySelector('#templateResult');
                
                

                
                // check if query matches (part of) the key.value
                if (subject.match(query)) {
                    console.log(subject);
                    console.log(fullSubject)
                    

                    // //var href = subject.replace(/\s+/g, '');
                    // var element = document.createElement("A")
                    // //element.classList.add("result")
                    // //element.setAttribute("href", "/detail/" + href)
                    // element.innerHTML = subject

                    // templateResult.innerHTML = element
                }
            }
        }


        if (option == "author") {
            for (var i = 0; i < res.data.length; i++) {
                var fullSubject = res.data[i];
                var subject = res.data[i].author.toLowerCase();
            

                
                
                
                // check if query matches (part of) the key.value
                if (subject.match(query)) {
                    
                    console.log(subject);
                    console.log(fullSubject)
                }
            }
        }
        if (option == "isbn") {
            for (var i = 0; i < res.data.length; i++) {
                var fullSubject = res.data[i];
                var subject = res.data[i].isbn;


                
                
                // check if query matches (part of) the key.value
                if (subject.match(query)) {
                    console.log(subject);
                    console.log(fullSubject)
                }
            }
        }

        // select node, create nodes, create attribute a-tag + href
        // var templateResult = document.querySelector('#templateResult');
        // var dataString = '';
        // var element = document.createElement("DIV");
        // var href = subject.replace(/\s+/g, '');
        // var elementP = document.createElement("A")


        // elementP.setAttribute("href", href);
        // elementP.innerHTML = dataString.concat(subject)
        // element.append(elementP)

        // element.classList.add('result');



        // try {
        //     element.value = elementP;
        //     console.log(subject)
        //     console.log(element)
        //     console.log(elementP)
        //     templateResult.append(element);
        // } catch (error) {
        //     console.log(error)
        // }


    }
