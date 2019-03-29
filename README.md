# OBA-R

## Summary
This is a single page web appication. oba-r

## Table of contents
1. [Live demo](#1-Live-demo)
2. [Install](#2-Install)
3. [Features](#3-Features)
4. [DATA](#4-DATA)
5. [Design decisions](#5-Design-Decisions)
6. [To-do](#6-To-do)
7. [Browser Technologies](#7-Browser-Technologies)
8. [Performance Matters](#8-Performance-Matters)


## 1. Live Demo
<!-- https://oba-ar.netlify.com -->
Heroku! under construction


## 2. Install
To install the project just fork it and 1. Clone it to your device.
2. Use npm install to install node dependencies.
3. Open a node.js terminal
4. Go to the folder that includes the cloned repository
5. For development mode enter command: npm run dev 

## 3. Features
This project features an Augmented Reality experience for visitors of the Public Library of Amsterdam. It uses the ar.js library and a-frame. Users can type in a query and select submit. The sourcecode wil then call the library's API and renders the title, author and short description in AR back to the user via a camera instance. 

Augmented Reality implementation has been delayed due to the sparse amount of time that's available to implement it. 

## 4. DATA


Connecting To the API and retrieving information:
```js
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

```

## 5. Design Decisions


## 6. To-do
- [X] Render data form OBA API to the browser
- [X] Add a Camera entity
- [X] Add AR-objects to the view that show off potential of web-based-AR
- [X] Setup Marker entity for ar.js
- [X] Setup live view on Netlify
- [X] Add user search input functionality
- [X] Setup routes for node.js
- [X] Modulize docs
- [ ] Fix filter problem for image data from API
- [ ] Add more Shadowing Effects
- [ ] fix bug: noscript is being read by the screenreader, see: noScript.ejs 
- [ ] Fix Revision
- [ ] Fix SW
- [ ] Fix manifest

## 7. Browser Technologies
    Features:

    -   Images
    With images disabled the section that shows where the image should be is still visible. This is not a good sight. Therefore in the future I want to use .svg files instead of .jpg add styling.
      
    -   Custom fonts
        To make sure that the user allways gets a good font a styling has been applied to font-family on the body. Each font is a fallback option if the one before fails, beginning with the default system UI-font and ending with sans-serif which tells the browser to pick the first sans-serif font that it finds. This statement covers 100% of the devices and browsers.

            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
            "Droid Sans", "Helvetica Neue", sans-serif;
            

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


ScreenReader: 
    I've noticed that the screenreader includes the html noscript tag in it's speech. I've added this issue as a bug to the to-do list.

    The screenreader reads the lyrical content of the page good. 
    It focusses on a specific grid when a grid is "clicked", therefore it slowly progresses through the document at a speed indicated by the user.
    


## 8. Performance Matters

At the moment the core functionality fails to load

This site consists of a server side rendered app thanks to node.js
I've implemented nodemon with the npm script npm run dev, which runs nodemon index.js

The main bottlenecks I've encountered are scripts are:
- images that need to be resized
- minify js and css
- The scripts that are being loaded take approximately 3.5 sec


 
Audits:

Final Audit:
## 7. Audit

![Lighthouse final performance check](https://github.com/Stanargy/BrowserTechnologies-PerformanceMatters/blob/master/public/assets/lighthouse_end.JPG)
![Lighthouse final progressive web app check](https://github.com/Stanargy/BrowserTechnologies-PerformanceMatters/blob/master/public/assets/lighthouse_end2.JPG)


Performance index.ejs
14-03-2019
Metrics:
    -   First Contentful Paint
    1.5 s
    -   Speed Index
    1.6 s
    -   Time to Interactive
    1.6 s
    -   First Meaningful Paint
    1.5 s
    -   First CPU Idle
    1.6 s
    -   Estimated Input Latency
    20 ms


Performance about.ejs
14-03-2019
Metrics:
    -   First Contentful Paint
    1.5 s
    -   Speed Index
    1.5 s
    -   Time to Interactive
    5.0 s
    -   First Meaningful Paint
    1.5 s
    -   First CPU Idle
    5.0 s
    -   Estimated Input Latency
    260 ms

handtrack js loads .bin shards for an extended period of time, though this doesn't interfere with loading the initial content.

Performance increase: caching
20-03-2019

index.ejs
    Metrics first load:
        -   First Contentful Paint: 
        1.1 s
        -   Speed Index:
        1.1 s
        -   Time to Interactive:
        1.1 s
        -   First Meaningful Paint:
        1.1 s
        -   First CPU Idle:
        1.1 s
        -   Estimated Input Latency: 
        10 ms


