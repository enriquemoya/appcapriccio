'use strict';

// Initialize Firebase
var database = {
    apiKey: "AIzaSyDG-ALiok8TA4coq_-KJ-J62Cg0no7wcKs",
    authDomain: "capriccio-testing.firebaseapp.com",
    databaseURL: "https://capriccio-testing.firebaseio.com",
    projectId: "capriccio-testing",
    storageBucket: "capriccio-testing.appspot.com",
    messagingSenderId: "486974687057"
};
firebase.initializeApp(database);

// Declare app level module which depends on views, and components
var app = angular.module('Capriccio', [
    'ngRoute',
    'firebase'
]);
app.config(
    function($routeProvider, $httpProvider, $locationProvider, $provide, $filterProvider) {
        console.log("config")
        $routeProvider
            .when('/', {
                name: "Index",
                url: "Index",
                templateUrl:'./app/index/index.html',
                controller: 'IndexCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        //$httpProvider.defaults.headers.common['Accept'] = 'application/json';
        //$httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
        $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
        $httpProvider.defaults.headers.common['Access-Control-Expose-Headers'] = '*';
        $httpProvider.useApplyAsync(true);
        $locationProvider.html5Mode(true);

    }
);