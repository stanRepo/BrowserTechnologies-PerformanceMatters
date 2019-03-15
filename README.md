# OBA-R

## Summary
This is a single page web appication. oba-r

## Table of contents
1. [Live demo](#1-Live-demo)
2. [Install](#2-Install)
3. [Features](#3-Features)
4. [API](#4-API)
5. [Design decisions](#5-Design-Decisions
6. [To-do](#6-To-do)
7. [Browser Technologies](#7-Browser-Technologies)
8. [Performance Matters](#8-Performance-Matters)


## 1. Live Demo
<!-- https://oba-ar.netlify.com -->
Heroku!


## 2. Install
To install the project just fork it and clone it to your device.
Then launch the "project-1-1819" folder. 

## 3. Features
This project features an Augmented Reality experience for visitors of the Public Library of Amsterdam. It uses the ar.js library and a-frame. Users can type in a query and select submit. The sourcecode wil then call the library's API and renders the title, author and short description in AR back to the user via a camera instance. 

The homepage renders the earth in AR-view by default

<!-- ![With Camera Entity](StanOoms1.JPG)
![Without Camera Entity](StanOoms2.JPG)
![View After submitting a Query](StanOoms3.JPG)
![View After Selecting a object from the Query](StanOoms4.JPG) -->



## 4. API


Connecting To the API and retrieving information:
```js
async function callAPI(){
    var query = document.querySelector('#inputField').value;
    localStorage.clear();
    console.log('API called')
    const api = new API({
        key: "1e19898c87464e239192c8bfe422f280"
    });
    const stream = await api.createStream("search/" + query + "&facet=type(movie)");
    stream
        .pipe((res) => {
            template(res)
        })
        .catch(console.error);
};
```

## 5. Design Decisions


## 6. To-do
- [X] Render data form OBA API to the browser
- [X] Add a Camera entity
- [X] Add AR-objects to the view that show off potential of web-based-AR
- [X] Setup Marker entity for ar.js
- [X] Setup live view on Netlify
- [X] Add user search input functionality
- [ ] Setup routes for node.js
- [ ] Modulize docs
- [ ] Take out global variables
- [ ] Fix filter problem for image data from API
- [ ] Add more Shadowing Effects

## 7. Browser Technologies
    Features:

    -   Images
    With images disabled the section that shows where the image"should" be is still visible. This is not a good sight. therefore in the future I would've wanted to use .svg files instead of .jpg add styling.  
    
    -   Custom fonts
        To make sure that the user allways gets a good font a styling has been applied to font-family on the body. Each font is a fallback option if the one before fails, beginning with the default system UI-font and ending with sans-serif which tells the browser to pick the first sans-serif font that it finds. This statement covers 100% of the devices and browsers.

        ```css
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
        ```

    -   Color
        To make sure content wouldn't be visible colorblind, a simple color palette has been used that consi
    -   Mouse/Trackpad Disabled
        To make sure a user can still tab to content I've made sure that all buttons, input and links are either <a> or <button>.

    -   Broadband connection

    -   Javascript Disabled
        Whenever The site is visited when javascript is disabled by the user, the site will display a <noscript> tag that tell's the user the site loses it's functionality when javascript stays disabled.

    -   Cookies
    	Caching isn't used at the moment. 
        This is something I might implement in the future and when that happens I will pay extra attention to making sure the user won't be contantly redirected to the homepage or contantly gets bothered to acceps a cookie -agreement.

    -   Localstorage
        Localstorage isn't used at the moment.
        When localstorage is turned off I will need to implement the same fallback strategy as with Cookies. But in this case I will also make sure the site still makes a call to retrieve data even though it can't store them locally.


## 8. Performance Matters

This site consists of a server side rendered app thanks to node.js
I've implemented nodemon with the npm script npm run dev, which runs nodemon index.js

The main bottlenecks I've encountered are scripts