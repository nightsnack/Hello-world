require.config({
    baseUrl: "app",
    paths: {
        'text': '../bower_components/requirejs/text',
        'jquery': '../bower_components/jquery/dist/jquery',
        'mockjax': '../bower_components/jquery-mockjax/dist/jquery.mockjax',
        'underscore': '../bower_components/underscore/underscore',
        'backbone': '../bower_components/backbone/backbone',
        'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap',
        'handlebars': '../bower_components/handlebars/handlebars',
        'router': '../app/src/router'
    },
    shim: {
        jquery: {
            exports: 'jQuery'
        },
        mockjax: {
            deps: ['jquery'],
            exports: 'Mockjax'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        handlebars: {
            exports: 'Handlebars'
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
                     "router"
            ],
    function ($, Backbone, _, Handlebars, bootstrap, AppRouter) {
        $(document).ready(function () {
            var appRouter = new AppRouter();
            Backbone.history.start();
        });

    });
