app.controller('homeCtrl', ['$scope', '$rootScope','mainService', function ($scope, $rootScope ,mainService) {
    mainService.resetCanvas();

    $scope.resetCanvas = function () {
        mainService.resetCanvas();
    }
    $rootScope.polaroids=[]
    $scope.convertToImage = function(){
        var dataURL = mainService.convertToImage($scope.memeName);
        var newPolaroid={
            dataUrl:dataURL,
            name:$scope.memeName
        }
        $scope.polaroids.push(newPolaroid);
        console.log($scope.polaroids)
    }

    $scope.loadToCanvas = mainService.loadToCanvas;

    $scope.addText = function () {
        mainService.context.font = "30px Kalam";
        mainService.context.fillStyle = "#fff"
        mainService.context.fillRect(0,280,300,280);
        mainService.context.textAlign = "center";
        mainService.context.fillStyle = "#000"
        mainService.context.fillText($scope.memeText, mainService.canvas.width / 2, 320);
    }

}]);

app.controller('allCtrl', ['$scope','$rootScope', 'allService', function ($scope, $rootScope ,allService) {
    $scope.text = 'ALL controller space';

    $scope.allMemes = allService.allMemes;
    $rootScope.polaroids
}]);


app.controller('memeCtrl', ['$scope','$rootScope', 'mainService', function ($scope,$rootScope , mainService) {
    $scope.text = 'MEME controller space';
}]);