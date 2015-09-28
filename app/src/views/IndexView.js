define(['src/views/AppView', 'handlebars', 'text!templates/index.hbs', 'src/util/HandlebarsHelper'], function (AppView, Handlebars, template, handlebarsHelper) {
    var IndexView = AppView.extend({
        title: "爱服务首页",
        template: template,
        render: function () {
            var compile = Handlebars.compile(this.template);
            this.$el.html(compile());
            $('.navbar-brand').text(this.title);
            return this;
        }

    });

    return IndexView;
});
