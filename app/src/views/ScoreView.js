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
                var that = this;
                this.model.fetch().done(function () {
                    if (that.model.attributes.status == 200) {
                        that.render(that.model.toJSON());
                    } else {
                        new BindView;
                    }
                });
            },
        });

        return ScoreView;
    });
