var app = angular.module('memeGenerator',['ui.router']);

app.config(['$stateProvider','$urlRouterProvider','$locationProvider',function($stateProvider,$urlRouterProvider,$locationProvider){
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/home'); 
    $stateProvider
    .state('home',{
        url:'/home',
        controller:'homeCtrl',
        templateUrl:'/templates/home.html'
    })
    .state('all',{
        url:'/alls',
        controller:'allCtrl',
        templateUrl:'/templates/all.html'
    })
    .state('meme',{
        url:'/memes',
        controller:'memeCtrl',
        templateUrl:'/templates/meme.html'

    })
}])
