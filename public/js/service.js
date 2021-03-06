app.service('mainService', function () {

var canvas = document.getElementById("memeCanvas");
var context =canvas.getContext("2d");
var canvasObject={
    canvas:canvas,
    context:context
}
function resetCanvas(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = "15px Kalam";
    context.fillStyle='#000'
    context.fillRect(20,20,290,260);
    context.textAlign="center"
    context.fillText("CREATE YOUR OWN POLAROID MEME",canvas.width/2 ,320 );
    
}

function loadToCanvas(){
    var img = document.getElementById("pic");
    // Work out where to center it
    var x = canvas.width / 2 - img.width / 2;
    var y = canvas.height / 2 - img.height / 2;
    context.fillStyle='#fff'
    context.fillRect(0,0,330,300);
    context.drawImage(img, 20,20,290,260);

}

function convertToImage(memeName){
    var button = document.getElementById('button');
    var urlString = canvas.toDataURL();
    button.href = urlString;
    button.download = memeName+".png";
    return urlString
   
}

    return {
        loadToCanvas:loadToCanvas,
        resetCanvas:resetCanvas,
        convertToImage:convertToImage,
        canvas:canvasObject.canvas,
        context:canvasObject.context
    }
})

app.service("allService", function(){
    var allMemes = [];
    return{
        allMemes: allMemes
    }
})