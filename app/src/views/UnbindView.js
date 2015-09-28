define(['src/views/AppView', 'handlebars', 'text!templates/unbind.hbs'], function (AppView, Handlebars, template) {
    var UnbindView = AppView.extend({
        title: "解除绑定",
        template: template,
        events: {
            "click #submit": "unbind",
        },
        initialize: function () {
            this.render();
        },
        render: function () {

            var compile = Handlebars.compile(this.template);
            this.$el.html(compile(this.model.toJSON()));
            $('.navbar-brand').text(this.title);

            return this;
        },
        unbind: function (e) {
            var that = this;
            var $zhxy_psw = $("input[name='zhxy_psw']");

            this.model.set({
                "zhxy_psw": $zhxy_psw.val()
            });

            this.model.save().done(function () {
                if (that.model.get("status") == 0) {
                    appRouter.navigate("success", {
                        trigger: true,
                        replace: false
                    });
                } else {
                    appRouter.navigate("error", {
                        trigger: true,
                        replace: false
                    });
                }
                location.reload();
            });

            return false;
        }
    });

    return UnbindView;
});
