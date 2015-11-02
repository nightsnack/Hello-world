define(['views/AppView', 'handlebars', 'text!templates/unbind.hbs', 'require'], function (AppView, Handlebars, template) {
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
                var status = that.model.get("status");
                if (status == 200) {
                    that.$el.children(":last-child").empty().append('<h2 class="text-success">解绑成功！</h2>');
                } else if (status == 400) {
                    $('input').next().addClass('error').text("智慧校园密码错误");
                } else if (status == 403) {
                    var systemErrorView = require('views/SystemErrorView');
                    new systemErrorView;
                } else {
                    var notFoundView = require('views/NotFoundView');
                    new notFoundView;
                }
            });

            return false;
        }
    });

    return UnbindView;
});
