define(['views/AppView', 'handlebars', 'text!templates/unbind.hbs'], function (AppView, Handlebars, template) {
    var UnbindView = AppView.extend({
        title: "解除绑定",
        template: template,
        events: {
            "click #submit": "unbind",
        },
        initialize: function () {
            this.model.attributes.open_id = this.getOpenid("open_id");
            this.render();
        },
        unbind: function (e) {
            var that = this;
            var $zhxy_psw = $("input[name='zhxy_psw']");

            this.model.set({
                "zhxy_psw": $zhxy_psw.val()
            });

            this.model.save().done(function () {
                if (that.model.get("status") == 200) {
                    that.$el.children(":last-child").empty().append('<h2 class="text-success">解绑成功！</h2>');
                } else {
                    console.log("error");
                    $('input').val("").attr("placeholder", "智慧校园密码错误");
                }
            });

            return false;
        }
    });

    return UnbindView;
});
