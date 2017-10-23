app.controller('homeCtrl', ['$scope', 'mainService', function ($scope, mainService) {
    // var canvas = document.getElementById("memeCanvas");
    // var context = canvas.getContext("2d");
    mainService.loadUp();
    mainService.convertToImage();
    
    $scope.text = 'click to start';
    $scope.memeImage = "puppy.jpg"


    var preview = document.getElementById("preview");

    $scope.loadToCanvas = mainService.loadToCanvas;
    


    $scope.addText = function(){
        mainService.context.font = "30px Kalam";
        mainService.context.fillStyle = "#000"
        mainService.context.textAlign="center"
        mainService.context.fillText($scope.memeText, mainService.canvas.width/2, 320);
    }

}]);

app.controller('allCtrl', ['$scope', 'mainService', function ($scope, mainService) {
    $scope.text = 'ALL controller space';

    $scope.allMemes = service.allMemes;
}]);


app.controller('memeCtrl', ['$scope', 'mainService', function ($scope, mainService) {
    $scope.text = 'MEME controller space';
}]);