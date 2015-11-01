require.config({
    baseUrl: "test",
    paths: {
        'text': '../../bower_components/requirejs/text',
        'jquery': '../../bower_components/jquery/dist/jquery',
        'fakeLoader': '../../bower_components/fakeLoader/fakeLoader',
        'underscore': '../../bower_components/underscore/underscore',
        'backbone': '../../bower_components/backbone/backbone',
        'bootstrap': '../../bower_components/bootstrap/dist/js/bootstrap',
        'handlebars': '../../bower_components/handlebars/handlebars',
        'mockjax': '../../bower_components/jquery-mockjax/dist/jquery.mockjax',
        'mocha': '../../bower_components/mocha/mocha',
        'chai': '../../bower_components/chai/chai',
        'handlebarsHelper': '../../app/src/util/HandlebarsHelper',
        'router': '../../test/router-test',
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
        mocha: {
            exports: 'mocha',
            init: function () {
                this.mocha.setup('bdd');
                return this.mocha;
            }
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

require(["mocha", "chai", "test/models/Models-test"],
    function (Mocha, chai) {
        Mocha.run();
    });
