var app = angular.module('myApp', ['ngRoute', 'angularUtils.directives.dirPagination']);
app.controller('myController', function ($scope, $location) {

    app.classCtrl($scope, $location);
    app.classExpandCtrl($scope, $location);
    app.classExpandDeleteCtrl($scope, $location);

    app.studentCtrl($scope, $location);
    app.studentExpandCtrl($scope, $location);

});
