Webcam.set({
    height:300,
    width:300,
    image_format:"png",
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_pic() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="cap_img" src ="'+data_uri+'"</>'
    })
}

console.log('ml5 version:' ,ml5.version);
clasiffier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/hreEBc1Wm/model.json', moderLoaded);

function moderLoaded() {
    console.log("Model has been loaded")
}

function check() {
    img = document.getElementById("cap_img")
    clasiffier.classify(img, gotResult);

}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    
    else {
        console.log(results)
        document.getElementById('Object').innerHTML = results[0].label;
        document.getElementById('Accuracy').innerHTML = results[0].confidence.toFIxed(3);
    }
}