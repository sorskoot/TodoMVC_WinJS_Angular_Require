/*global define*/
'use strict';

define(['angular', 'app', 'controllers/todo'], function (angular, app) {

    angular.bootstrap(document, ['ToDoMVC']);

    return {
        run: function (activatedEventDetail) {
           

            WinJS.UI.processAll();

            var activationKinds = Windows.ApplicationModel.Activation.ActivationKind;

            if (activatedEventDetail.kind === activationKinds.launch) {

            }
        }
    }
});