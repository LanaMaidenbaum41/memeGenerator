app.service('mainService', function () {
var allMemes = [];
var canvas = document.getElementById("memeCanvas");
var context =canvas.getContext("2d");
var canvasObject={
    canvas:canvas,
    context:context
}
function loadUp(){
    context.font = "15px Kalam";
    context.fillStyle = "#000"
    context.textAlign="center"
    context.fillText("CREATE YOUR OWN GRAPHIC MEME", canvas.width/2, canvas.height/2);
}


function loadToCanvas(){
    var img = document.getElementById("pic");
    console.log(img)
    console.log(img.width);
    console.log(img.height);
    // Work out where to center it
    var x = canvas.width / 2 - img.width / 2;
    var y = canvas.height / 2 - img.height / 2;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, 0,0,300,280);

}

function convertToImage(){
    var button = document.createElement('a');
    button.id = "button"
    button.innerHTML = "convert to base64"
    button.addEventListener('click', function (ev) {
        var urlString = canvas.toDataURL();
        preview.src = urlString;
        button.href = urlString;
        console.log(button);
        button.download = "myPolaroid.png";
        $scope.loadToCanvas();

    });
    document.body.appendChild(button);

}



    return {
        allMemes:allMemes,
        loadToCanvas:loadToCanvas,
        loadUp:loadUp,
        convertToImage:convertToImage,
        canvas:canvasObject.canvas,
        context:canvasObject.context
    }
})