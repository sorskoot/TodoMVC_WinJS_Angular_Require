/*global define*/
'use strict';

define(['angular', 'app', 'controllers/todo','services/todoStorage'], function (angular, app) {

    app.factory('shareTarget', function (todoStorage) {
        return {
            share: function (shareOperation) {                
                if (shareOperation.data.contains(Windows.ApplicationModel.DataTransfer.StandardDataFormats.text)) {
                    shareOperation.data.getTextAsync().done(function (text) {
                        var todos = todoStorage.get();

                        todos.push({
                            title: text,
                            completed: false
                        });

                        todoStorage.put(todos);
                        shareOperation.reportCompleted();
                    });

                }
            }
        }
    })
});