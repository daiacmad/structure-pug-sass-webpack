import '../styles/index.scss';
var angular = require("angular");
var ngRoute = require("angular-route");

var app = angular.module("myApp", [ngRoute]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/abc", {
        templateUrl : "test.html"
    })
});
