require.config({
    baseUrl: "test",
    paths: {
        'text': '../../bower_components/requirejs/text',
        'jquery': '../../bower_components/jquery/dist/jquery',
        'fakeLoader': '../../bower_components/fakeLoader/fakeLoader',
        'underscore': '../../bower_components/underscore/underscore',
        'backbone': '../../bower_components/backbone/backbone',
        'foundation': '../../bower_components/foundation/js/foundation',
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
        fakeLoader: {
            deps: ['jquery'],
            exports: 'fakeLoader'
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
        foundation: {
            deps: ['jquery']
        }
    }
});

require([
                     "jquery",
                     "backbone",
                     "underscore",
                     "handlebars",
                     "foundation",
                     "router",
                     "mock/mockjax"
            ],
    function ($, Backbone, _, Handlebars, foundation, AppRouter, Mockjax) {
        $(document).ready(function () {
            var appRouter = new AppRouter();
            Backbone.history.start();
            $(document).foundation('tab', 'reflow');
        });

    });
