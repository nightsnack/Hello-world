define(['src/views/AppView', 'handlebars', 'text!templates/score.hbs', 'src/mock/data'], function (AppView, Handlebars, template, data) {
    var ScoreView = AppView.extend({
        title: "成绩查询",
        template: template,
        initialize: function () {
            var that = this;
            this.model.save().done(function () {
                that.render();
            });
        },
        render: function () {

                var compile = Handlebars.compile(this.template);
//                this.$el.html(compile(this.model.toJSON()));
                this.$el.html(compile(data1));
                $('.navbar-brand').text(this.title);

                return this;
            }
            //data: data1
    });

    return ScoreView;
});
