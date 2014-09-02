/*global define*/
'use strict';

define(['app', ,'angularwinjs', 'services/todoStorage'], function (app) {
    return app.controller('ToDoController', ['$scope', '$location', 'todoStorage','filterFilter',

        function TodoController($scope, $location, todoStorage, filterFilter) {
            var todos = $scope.todos = todoStorage.get();

            //Add the search pane to the app
            var SearchPane = Windows.ApplicationModel.Search.SearchPane.getForCurrentView();
            SearchPane.onsuggestionsrequested = function (eventObject) {
                var suggestionRequest = eventObject.request;
                var query = eventObject.queryText.toLowerCase();
                for (var i = 0; i < todos.length; i++) {
                    if (todos[i].title.toLowerCase().indexOf(query) == 0) {
                        suggestionRequest.searchSuggestionCollection.appendQuerySuggestion(todos[i].title);
                    }
                }
            };

            $scope.newTodo = '';
            $scope.editedTodo = null;

            $scope.$watch('todos', function () {
                $scope.remainingCount = filterFilter(todos, { completed: false }).length;
                $scope.doneCount = todos.length - $scope.remainingCount;
                $scope.allChecked = !$scope.remainingCount;
                todoStorage.put(todos);
            }, true);

            $scope.addTodo = function () {
                var newTodo = $scope.newTodo.trim();
                if (!newTodo.length) {
                    return;
                }

                addTodo(newTodo);

                $scope.newTodo = '';
            };

            $scope.editTodo = function (todo) {
                $scope.editedTodo = todo;
            };


            $scope.doneEditing = function (todo) {
                $scope.editedTodo = null;
                todo.title = todo.title.trim();

                if (!todo.title) {
                    $scope.removeTodo(todo);
                }
            };

            $scope.removeTodo = function (todo) {
                todos.splice(todos.indexOf(todo), 1);
            };

            $scope.clearDoneTodos = function () {
                $scope.todos = todos = todos.filter(function (val) {
                    return !val.completed;
                });
            };

            $scope.markAll = function (done) {
                todos.forEach(function (todo) {
                    todo.completed = !done;
                });
            };

            $scope.select = function (state) {
                $scope.statusFilter = 
                    (state === 'Active') ? { completed: false } :
                    (state === 'Completed') ? { completed: true } : null;
            }

            function addTodo(newTodo) {
                todos.push({
                    title: newTodo,
                    completed: false
                });
            }

            return {
                addTodo:addTodo
            }
        }
        
    ]);
});