/*global define*/
'use strict';

define(['angular', 'app', 'controllers/todo'], function (angular, app) {

    angular.bootstrap(document, ['ToDoMVC']);

    Windows.ApplicationModel.Search.SearchPane.getForCurrentView().onquerysubmitted = function (eventObject) {
        WinJS.log && WinJS.log("User submitted the search query: " + eventObject.queryText, "sample", "status");
    };

    return {
        run: function (activatedEventDetail) {
           

            WinJS.UI.processAll();

            var activationKinds = Windows.ApplicationModel.Activation.ActivationKind;

            if (activatedEventDetail.kind === activationKinds.launch) {

            } else if (eventObject.detail.kind === Windows.ApplicationModel.Activation.ActivationKind.search) {
                // Use setPromise to indicate to the system that the splash screen must not be torn down
                // until after processAll and navigate complete asynchronously.
                eventObject.setPromise(WinJS.UI.processAll().then(function () {
                    if (eventObject.detail.queryText === "") {
                        // Navigate to your landing page since the user is pre-scoping to your app.
                    } else {
                        // Display results in UI for eventObject.detail.queryText and eventObject.detail.language.
                        // eventObject.detail.language represents user's locale.
                    }

                    // Navigate to the first scenario since it handles search activation.
                    //var url = scenarios[0].url;
                    //return WinJS.Navigation.navigate(url, { searchDetails: eventObject.detail });
                }));
            }
        }
    }
});