define(['src/views/AppView', 'src/views/BindView', 'handlebars', 'text!templates/score.hbs', 'src/mock/data'], function (AppView, BindView, Handlebars, template, data) {
    var ScoreView = AppView.extend({
        title: "成绩查询",
        template: template,
        initialize: function () {
            var that = this;
            this.model.save().done(function () {
                if (that.validate()) {
                    that.render(that.model.toJSON());
//                    that.render(data1);
                } else {
                    new BindView;
                }
            });
        },
        validate: function () {
                return this.model.status === 200 ? true : false;
            }
            //data: data1
    });

    return ScoreView;
});
