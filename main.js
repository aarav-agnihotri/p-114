function startClassification() {
    
    navigator.mediaDevices.getUserMedia({audio:true});

    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Z-MyVyk13/model.json', modelReady);

    
}