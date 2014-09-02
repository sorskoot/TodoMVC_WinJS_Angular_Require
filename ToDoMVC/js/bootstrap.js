/*global define*/
'use strict';

define(['angular', 'app', 'controllers/todo', 'services/shareTarget'], function (angular, app) {

    var module = angular.bootstrap(document, ['ToDoMVC']);

    return {
        run: function (activatedEventDetail) {

            WinJS.UI.processAll();

            var activationKinds = Windows.ApplicationModel.Activation.ActivationKind;

            if (activatedEventDetail.kind === activationKinds.launch) {

            } else {
                if (activatedEventDetail.kind === Windows.ApplicationModel.Activation.ActivationKind.shareTarget) {
                    var share = module.get('shareTarget');
                    share.share(activatedEventDetail.shareOperation);
                }

            }
        }
    }
});