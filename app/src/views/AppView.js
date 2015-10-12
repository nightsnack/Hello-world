define([
            'require',
            'backbone',
            'handlebars',
            'views/BindView'
        ],
    function (Require, Backbone, Handlebars, BindView) {
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
            attr: "",
            validate: function () {
                var that = this,
                    BindView;
                this.model.attributes.open_id = this.getOpenid("open_id");
                this.model.save().done(function () {
                    if (that.model.attributes.status == 200) {
                        that.render(that.model.toJSON());
                    } else {
                        // requirejs 循环依赖
                        BindView = Require('views/BindView');
                        BindView = BindView.extend({
                            attr: that.attr
                        });
                        new BindView;
                    }
                })
            },
            getOpenid: function (param) {
                //构造一个含有目标参数的正则表达式对象
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
                //匹配目标参数
                var r = window.location.search.substr(1).match(reg);
                //返回参数值
                if (r != null) return unescape(r[2]);
                return null;
            }
        });
        return AppView;
    });
