Webcam.set({
   width:300,
   height:330,
   image_format:'png',
   png_quaily:90
});

Webcam.attach('#camera');


function capture_image() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id = "capture_image" src = "' + data_uri + '"/>'
    });
}

console.log("ml5.version",ml5.version);

classifier = ml5.imageClassifier('MobileNet',modelLoaded);

function modelLoaded() {
    console.log("model loaded");
}

function identify_image() {
    img = document.getElementById("capture_image");
    classifier.classify(img,gotResult);
}

function gotResult(error,results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("object").innerHTML = results[1].label;
    }

}