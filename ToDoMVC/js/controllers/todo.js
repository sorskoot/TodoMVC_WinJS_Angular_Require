/*global define*/
'use strict';

define(['app'], function (app) {
    return app.controller('ToDoController', ['$scope', '$location',
        function TodoController($scope, $location) {
         

            $scope.helloWorld = "Hello World!!";
        }
    ]);
});