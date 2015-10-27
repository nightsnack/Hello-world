define([
            'views/AppView',
            'handlebars',
            'text!templates/not-found.hbs'
        ],
    function (AppView, Handlebars, template) {
        var NotFoundView = AppView.extend({
            title: "找不到指定文件",
            template: template
        });
        return NotFoundView;
    });
