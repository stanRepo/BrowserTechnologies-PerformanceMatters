(function(){
    var submit = document.getElementById('i-button')
    submit.addEventListener('click', getData)
}())


async function collectAsync(){
    await getData();
}

function getData(){
    
    
    return new Promise(resolve =>{
        fetch('/assets/results.json')
        .then(function (response) {
            return response.json();
        })
        .then((res) => {
            console.log(res)
            filterResults(res);
            resolve('resolved');
        })
        .catch((err) => {
            console.log(err);
        })
    });   
}   
    
    
    function filterResults(res) {
    var query = new String(document.querySelector('#i-text').value);
    var option = document.querySelector('#options').value;
    var optionArray = ['Title', 'Author', 'ISBN']
        
        console.log('the query = ' + query);
        
        // check if option matches key of data
        try{ for(var z = 0; 0 < optionArray.length; z++){
            if (option == optionArray[z]) {
                option = option.toLowerCase();
                console.log(option)
                templatorTitle(res, query)
            }
        }
    }
    catch(error){()=>{console.log(error)}}
        
    
    
    function templatorTitle(res, query) {

        for (var i = 0; i < res.data.length; i++) {
            var subject = res.data[i].title;
            // check if query matches (part of) the key.value
            if (subject.match(query)) {
                
                // select node, create nodes, create attribute a-tag + href
                var templateResult = document.querySelector('#templateResult');
                var dataString = '';
                var element = document.createElement("DIV");
                var href = subject.replace(/\s+/g, '');
                var elementP = document.createElement("A")
                
                
                elementP.setAttribute("href", href);
                elementP.innerHTML = dataString.concat(subject)
                element.append(elementP)
                
                element.classList.add('result');


                
                try {
                    element.value = elementP;
                    console.log(subject)
                    console.log(element)
                    console.log(elementP)
                    templateResult.append(element);
                } catch (error) {
                    console.log(error)
                }
            };
        }
    }
};

