(function () {
    var submit = window.document.querySelector('#trackbutton')
    submit.addEventListener('click', getResult)

    function getResult() {
        fetch('/assets/results.json')
            .then(function (response) {
                return response.json();
            })
            .then((res) => {
                console.log(res)
                filterResults(res);
            })
            .then()
            .catch((err) => {
                console.log(err);
            })
    }



    function filterResults(res) {
        var query = new String(document.querySelector('#inputField').value);
        var option = document.querySelector('#options').value;
        console.log('the query = ' + query);

        // check if option matches key of data
        if (option == 'Title') {
            option = option.toLowerCase();
            console.log(option)
            templatorTitle(res, query)
        }
        if (option == 'Author') {
            option = option.toLowerCase();
            console.log(option)
            templatorAuthor(res, query)
        }
        if (option == 'ISBN') {
            option = option.toLowerCase();
            console.log(option)
            templatorISBN(res, query)
        }
    }



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
                    element.value = dataString;
                    console.log(element)
                    templateResult.append(element);
                } catch (error) {
                    console.log(error)
                }
            };
        }
    }

    function templatorAuthor(res, query) {

        for (var i = 0; i < res.data.length; i++) {
            var subject = res.data[i].title;
            // check if query matches (part of) the key.value
            if (subject.match(query)) {
                var templateResult = document.querySelector('#templateResult');
                var dataString = '';
                var element = document.createElement("DIV");
                var elementP = document.createElement("A")
                elementP.innerHTML = dataString.concat(subject)
                element.append(elementP)

                element.classList.add('result');



                try {
                    element.value = dataString;
                    console.log(element)
                    templateResult.append(element);
                } catch (error) {
                    console.log(error)
                }
            };
        }
    }

    function templatorISBN(res, query) {

        for (var i = 0; i < res.data.length; i++) {
            var subject = res.data[i].title;
            // check if query matches (part of) the key.value
            if (subject.match(query)) {
                var templateResult = document.querySelector('#templateResult');
                var dataString = '';
                var element = document.createElement("DIV");
                var elementP = document.createElement("A")
                elementP.innerHTML = dataString.concat(subject)
                element.append(elementP)

                element.classList.add('result');



                try {
                    element.value = dataString;
                    console.log(element)
                    templateResult.append(element);
                } catch (error) {
                    console.log(error)
                }
            };
        }
    }


}());