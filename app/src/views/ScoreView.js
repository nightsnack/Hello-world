define([
        'views/AppView',
        'views/BindView',
        'handlebars',
        'text!templates/score.hbs'
    ],
    function (AppView, BindView, Handlebars, template) {
        var ScoreView = AppView.extend({
            title: "成绩查询",
            template: template,
            initialize: function () {
                this.attr = "student_id";
                this.validate();
            }
        });

        return ScoreView;
    });
