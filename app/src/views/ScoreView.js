define([
        'src/views/AppView',
        'src/views/BindView',
        'handlebars',
        'text!templates/score.hbs'
    ],
    function (AppView, BindView, Handlebars, template) {
        var ScoreView = AppView.extend({
            title: "成绩查询",
            template: template,
            initialize: function () {
                this.validate();
            }
        });

        return ScoreView;
    });
