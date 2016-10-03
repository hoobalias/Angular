var module = angular.module("myApp", ["ngRoute"]);

module.config(function ($routeProvider) {
    $routeProvider
        .when("/instinct", {
            templateUrl: "templates/instinct.html"
        })
        .when("/mystic", {
            templateUrl: "templates/mystic.html"
        })
        .when("/valor", {
            templateUrl: "templates/valor.html"
        })
        .otherwise({
            template: "<h1>None</h1><p>Nothing has been selected</p>"
        });
});