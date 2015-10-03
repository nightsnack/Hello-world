define([
        'src/views/AppView',
        'src/views/RankTestView',
        'handlebars',
        'text!templates/rank-test.hbs'
    ],
    function (AppView, RankView, Handlebars, template) {
        var RankView = AppView.extend({
            title: "等级测试",
            template: template,
            initialize: function () {
                this.validate();
            }
        });

        return RankView;
    });
