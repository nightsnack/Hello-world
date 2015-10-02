define(['backbone', 'handlebars'], function (Backbone, Handlebars) {
    var AppView = Backbone.View.extend({
        el: $('#main'),
        events: {
            'click #refresh': 'refresh'
        },
        model: {},
        initialize: function () {
            this.render();
        },
        refresh: function () {
            location.reload();
        },
        render: function (data) {
            var compile = Handlebars.compile(this.template);
            this.$el.html(compile(data));
            $('.navbar-brand').text(this.title);
            return this;
        },
        validate: function () {
            //验证是否绑定
            this.model.fetch();
            this.model.status || this.render(form);
            this.render(this.model);
        }

    });
    return AppView;
});
