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
                    timeToHide: 99999,
                    zIndex: "-1",
                    bgColor: function () {
                        return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
                    },
                    spinner: "spinner1"
                });
            }
        });
        return LoadingView;
    });
