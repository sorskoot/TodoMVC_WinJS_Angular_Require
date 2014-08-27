/*global require*/
'use strict';
(function () {

    require.config({
        baseUrl: "/js",
        paths: {
            angular: 'ext/angular'
        },
        shim: {
            angular: {
                exports: 'angular'
            }
        }
    });
   
    //var app = WinJS.Application;
    //var activation = Windows.ApplicationModel.Activation;

    //app.onactivated = function (args) {
    //    if (args.detail.kind === activation.ActivationKind.launch) {
    //        if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
    //            // TODO: This application has been newly launched. Initialize
    //            // your application here.
    //        } else {
    //            // TODO: This application has been reactivated from suspension.
    //            // Restore application state here.
    //        }
    //        args.setPromise(WinJS.UI.processAll().then(function(){
                require(['angular', 'app', 'controllers/todo'], function (angular, app) {
                    angular.bootstrap(document, ['ToDoMVC']);
                });

    //        }));
    //    }
    //};

    //app.oncheckpoint = function (args) {
    //    var a = args;
    //};

    //app.start();
    
})();