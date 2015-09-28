require.config({
    baseUrl: "app",
    paths: {
        'text': '../bower_components/requirejs/text',
        'jquery': '../bower_components/jquery/dist/jquery',
        'underscore': '../bower_components/underscore/underscore',
        'backbone': '../bower_components/backbone/backbone',
        'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap',
        'handlebars': '../bower_components/handlebars/handlebars',
        'handlebarsHelper': '../app/src/util/HandlebarsHelper',
        'router': '../app/src/router'
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
                     "router"
            ],
    function ($, Backbone, _, Handlebars, bootstrap, AppRouter) {
        $(document).ready(function () {
            console.log("Router Start");
            var appRouter = new AppRouter();
            console.log("Router End");

            console.log("History Start");
            Backbone.history.start();
            console.log("History End");

        });

    });
