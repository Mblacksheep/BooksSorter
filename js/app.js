angular.module('sortTable', [
    'ui.router',
    'ui.bootstrap',
    'sortTable.sortTable'
])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise("/sortTable");

    var header = {
        templateUrl: 'templates/master/header.html',
        controller: function($scope) {}
    }

    $stateProvider
        .state('sortTable', {
            url: "/sortTable",
            views: {
                header: header,
                content: {
                    templateUrl: 'views/sortTable/sortTable.html',
                    controller: 'SortTableCtrl'
                }
            }
        });

        $locationProvider.hashPrefix('');
})