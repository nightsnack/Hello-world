define([
            'src/views/AppView',
            'handlebars',
            'text!templates/index.hbs'
        ],
    function (AppView, Handlebars, template) {
        var IndexView = AppView.extend({
            title: "爱服务首页",
            template: template
        });
        return IndexView;
    });
