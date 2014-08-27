/*global define*/
'use strict';

define(['angular'], function (angular) {
    //WinJS.Application.addEventListener("activated", function (e) {
    //    "use strict";

    //    e.setPromise(new WinJS.Promise(function (complete) {
    //        if (args.detail.kind === activation.ActivationKind.launch) {
    //            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
    //                // TODO: This application has been newly launched. Initialize
    //                // your application here.
    //            } else {
    //                // TODO: This application has been reactivated from suspension.
    //                // Restore application state here.
    //            }
    //            args.setPromise(WinJS.UI.processAll());
    //        }
    //    }));
    //});

    //WinJS.Application.start();

    return angular.module('ToDoMVC', []);
});

