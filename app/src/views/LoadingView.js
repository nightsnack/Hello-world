define([
            'views/AppView',
            'handlebars',
            'jquery',
            'fakeLoader',
            'text!templates/loading.hbs'
        ],
    function (AppView, Handlebars, $, fakeLoader, template) {
        var LoadingView = AppView.extend({
            title: "正在加载",
            template: template,
            initialize: function () {
                this.render();
                $(".fakeLoader").fakeLoader({
                    timeToHide: 120000,
                    bgColor: "brown", //2ecc71
                    spinner: "spinner1"
                });
            }
        });
        return LoadingView;
    });
