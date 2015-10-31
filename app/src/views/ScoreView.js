define([
        'views/AppView',
        'handlebars',
        'text!templates/score.hbs'
    ],
    function (AppView, Handlebars, template) {
        var ScoreView = AppView.extend({
            title: "成绩查询",
            template: template,
            initialize: function () {
                this.attr = "jwxt_psw";
                this.validate();
            }
        });
        return ScoreView;
    });
