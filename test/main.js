require.config({
    baseUrl: "test",
    paths: {
        'text': '../../bower_components/requirejs/text',
        'jquery': '../../bower_components/jquery/dist/jquery',
        'underscore': '../../bower_components/underscore/underscore',
        'backbone': '../../bower_components/backbone/backbone',
        'bootstrap': '../../bower_components/bootstrap/dist/js/bootstrap',
        'handlebars': '../../bower_components/handlebars/handlebars',
        'mockjax': '../../bower_components/jquery-mockjax/dist/jquery.mockjax',
        'handlebarsHelper': '../../app/src/util/HandlebarsHelper',
        'router': '../../app/src/router',
        'models': '../../app/src/models',
        'views': '../../app/src/views',
        'util': '../../app/src/util',
        'templates': '../../app/templates',
        'test': '../../test',
        'mock': '../../test/mock'
    },
    shim: {
        jquery: {
            exports: 'jQuery'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        mockjax: {
            deps: ['jquery'],
            exports: 'Mockjax'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        handlebarsHelper: {
            deps: ['handlebars']
        },
        bootstrap: {
            deps: ['jquery']
        }
    }
});

require([
                     "jquery",
                     "backbone",
                     "underscore",
                     "handlebars",
                     "bootstrap",
                     "router",
                     "mock/mockjax"
            ],
    function ($, Backbone, _, Handlebars, bootstrap, AppRouter, Mockjax) {
        $(document).ready(function () {
            var appRouter = new AppRouter();
            Backbone.history.start();
        });

    });
