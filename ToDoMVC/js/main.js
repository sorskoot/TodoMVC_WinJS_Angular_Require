/*global require*/
'use strict';

(function () {
    require.config({
        baseUrl: "/js",
        paths: {
            angular: 'ext/angular',
            angularwinjs: 'ext/angular-winjs'
        },
        shim: {
            angular: {
                exports: 'angular'
            },
            angularwinjs: {
                angularwinjs: 'angular-winjs',
                deps:['angular']
            }
        }
    });

    WinJS.Application.onactivated = function (args) {
       args.setPromise=new WinJS.Promise(function(complete){
           require(['bootstrap'], function (bootstrap) {
               WinJS.UI.processAll();
               bootstrap.run(args.detail);

               complete();
           });
        });
       
    }
  

    WinJS.Application.start();
})();