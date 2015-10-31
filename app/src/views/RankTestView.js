define([
        'views/AppView',
        'handlebars',
        'text!templates/rank-test.hbs'
    ],
    function (AppView, Handlebars, template) {
        var RankView = AppView.extend({
            title: "等级测试",
            template: template,
            initialize: function () {
                this.attr = "jwxt_psw";
                this.validate();
            }
        });

        return RankView;
    });
