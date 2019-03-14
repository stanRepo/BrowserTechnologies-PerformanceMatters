(function(){

    const video = document.getElementById("myvideo");
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
 let trackButton = document.getElementById("trackbutton");
 let updateNote = document.getElementById("updatenote");
 trackButton.addEventListener('click', toggleVideo);
 let isVideo = false;
 let model = null;
 
 class hand{
     constructor(positionX, positionY, positionZ){
         
         this.positionX = positionX
         this.positionY = positionY
         this.positionZ = positionZ
        }
    }
    
    const modelParams = {
        flipHorizontal: true,   // flip e.g for video  
     maxNumBoxes: 1,        // maximum number of boxes to detect
     iouThreshold: 0.5,      // ioU threshold for non-max suppression
     scoreThreshold: 0.6,    // confidence threshold for predictions.
    }
    
    function startVideo() {
        handTrack.startVideo(video).then(function (status) {
            console.log("video started", status);
            if (status) {
                updateNote.innerText = "Video started. Now tracking"
                isVideo = true
                runDetection()
            } else {
                updateNote.innerText = "Please enable video"
            }
        });
    }
    
    function toggleVideo() {
        if (!isVideo) {
            updateNote.innerText = "Starting video"
            startVideo();
        } else {
            updateNote.innerText = "Stopping video"
            handTrack.stopVideo(video)
            isVideo = false;
            updateNote.innerText = "Video stopped"
        }
    }
    
    
    
    function runDetection() {
        model.detect(video).then(predictions => {
            if(predictions.length != 0){
                var myhand = new hand(predictions[0].bbox[0],predictions[0].bbox[1],predictions[0].bbox[2],predictions[0].bbox[3])
                console.log(myhand);
            }
            model.renderPredictions(predictions, canvas, context, video);
            if (isVideo) {
                requestAnimationFrame(runDetection);
            }
        });
    }

    // Load the model.
    handTrack.load(modelParams).then(lmodel => {
        // detect objects in the image.
        model = lmodel
        updateNote.innerText = "Loaded Model!"
        trackButton.disabled = false
    });
    
 
    // // your code here
// var video = document.getElementById('video');
// if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    //     navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //         video.src = window.URL.createObjectURL(stream);
        //         video.play();
        //     });
// };

// console.log('video is playing')
// for(var i =0; i<2; i++){
    
    //     setInterval(function(){
        
        //         const img = document.getElementById('video');  
        //         handTrack.load().then(model => { 
//             model.detect(img).then(predictions => {
    //                 console.log('Predictions: ', predictions) // bbox predictions
    //             });
    //         });
//     }, 2000);
// };


// runDetection()

// function runDetection() {
    //     model.detect(video).then(predictions => {
        //         console.log("Predictions: ", predictions);
        //         model.renderPredictions(predictions, canvas, context, video);
        //         if (isVideo) {
            //             requestAnimationFrame(runDetection);
            //         }
            //     });
            // }
            
        })();