(function () {
    'use strict';

    angular
        .module('appRouter', [
            'ui.router'
        ]);

    angular.module('appRouter')
        .config(configRouter);

    function configRouter($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state(
                'home', {
                    url: '/home',
                    templateUrl: 'app/components/home/homeView.html'
                }
            )
            .state(
                'about', {
                    url: '/about',
                    templateUrl: 'app/components/about/aboutView.html'
                }
            )
            .state(
                'about.one', {
                    url: '/info-one',
                    templateUrl: 'app/components/about/infoOneView.html'
                }
            )
            .state(
                'about.two', {
                    url: '/info-two',
                    templateUrl: 'app/components/about/infoTwoView.html'
                }
            )
            .state(
                'about.three', {
                    url: '/info-three',
                    templateUrl: 'app/components/about/infoThreeView.html'
                }
            )
            .state(
                'about.two.four', {
                    url: '/info-four',
                    template: 'Ac molestie penatibus venenatis rhoncus taciti per arcu nulla cras \
                    id habitasse, inceptos nisl vitae potenti mus eros curabitur pharetra aptent libero.'
                }
            )
            .state(
                'about.two.five', {
                    url: '/info-five',
                    template: 'Consequat magnis duis penatibus suscipit tristique, vel quam in sociis \
                    habitant, eleifend risus auctor phasellus.'
                }
            )
            .state(
                'contact', {
                    url: '/contact',
                    template: 'Semper dictum viverra eget molestie purus, montes sem libero malesuada.'
                }
            );
    }

}());