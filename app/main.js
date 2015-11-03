require.config({
    baseUrl: "app",
    paths: {
        'text': '../bower_components/requirejs/text',
        'jquery': '../bower_components/jquery/dist/jquery',
        'mockjax': '../bower_components/jquery-mockjax/dist/jquery.mockjax',
        'rainyday': '../bower_components/rainyday.js/rainyday',
        'skycons': '../bower_components/skycons-html5/skycons',
        'fakeLoader': '../bower_components/fakeLoader/fakeLoader',
        'underscore': '../bower_components/underscore/underscore',
        'backbone': '../bower_components/backbone/backbone',
        'foundation': '../bower_components/foundation/js/foundation',
        'handlebars': '../bower_components/handlebars/handlebars',
        'chart': '../bower_components/Chart.js/Chart',
        'router': '../app/src/router',
        'models': '../app/src/models',
        'views': '../app/src/views',
        'util': '../app/src/util',
        'templates': '../app/templates'
    },
    shim: {
        jquery: {
            exports: 'jQuery'
        },
        mockjax: {
            deps: ['jquery'],
            exports: 'Mockjax'
        },
        fakeLoader: {
            deps: ['jquery'],
            exports: 'fakeLoader'
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
        foundation: {
            deps: ['jquery'],
            exports: 'foundation'
        },
        rainyday: {
            exports: 'rainyday'
        },
        skycons: {
            exports: 'skycons'
        }
    }
});

require([
                     "jquery",
                     "backbone",
                     "underscore",
                     "handlebars",
                     "foundation",
                     "router"
            ],
    function ($, Backbone, _, Handlebars, foundation, AppRouter) {
        $(document).ready(function () {
            var appRouter = new AppRouter();
            Backbone.history.start();
            $(document).foundation('tab', 'reflow');
        });

    });
