define([
            'views/AppView',
            'handlebars',
            'text!templates/about.hbs'
        ],
    function (AppView, Handlebars, template) {
        var AboutView = AppView.extend({
            title: "关于我们",
            template: template
        });
        return AboutView;
    });
