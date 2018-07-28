(function () {
    'use strict';

    angular.module('adminlte').config(configFn);

    /**
     * @ngInject
     * @type {string[]}
     */
    configFn.$inject = ['$stateProvider'];

    /**
     * Config
     *
     * @param $stateProvider
     */
    function configFn($stateProvider) {
        $stateProvider.state('formsEditors', {
            url: '/forms/editors',
            templateUrl: 'app/pages/forms/editors/editors.html',
            controller: ControllerFn,
            controllerAs: 'vmEditors'
        });
    }

    /**
     * Controller Function
     *
     * @constructor
     */
    function ControllerFn() {
        var vm = this;

        $(document).ready(function () {
            //bootstrap WYSIHTML5 - text editor
            $('.textarea').wysihtml5();
        });
    }
})();
