Webcam.set({
    width:350,
    height:250,
    image_format:'png',
    png_quality:95
});
camera = document.getElementById('camera');
Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "captured_image src = "'+data_uri+'"/>'
    });
}
console.log("ml5 version:"+ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/4Bownde3k/model.json',modelLoaded);

function modelLoaded() {
    console.log("the model has been loaded");
}

