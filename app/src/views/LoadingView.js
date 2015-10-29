define([
            'views/AppView',
            'handlebars',
            'text!templates/index.hbs'
        ],
    function (AppView, Handlebars, template) {
        var LoadingView = AppView.extend({
            title: "正在加载",
            template: template
        });
        return LoadingView;
    });
