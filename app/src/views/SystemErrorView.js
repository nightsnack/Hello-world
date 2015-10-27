define([
        'views/AppView',
        'handlebars',
        'text!templates/system-error.hbs'
    ],
    function (AppView, Handlebars, template) {
        var SystemErrorView = AppView.extend({
            title: "系统错误",
            template: template
        });

        return SystemErrorView;
    });
