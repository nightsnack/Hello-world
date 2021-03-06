define([
            'require',
            'backbone',
            'handlebars'
        ],
    function (Require, Backbone, Handlebars) {
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
                $('#refresh').addClass('fa-spin');
                location.reload();
            },
            render: function (data) {
                var compile = Handlebars.compile(this.template);
                this.$el.html(compile(data));
                $('.title').text(this.title);
                this.window();
                $(document).foundation();
                return this;
            },
            attr: "",
            validate: function () {
                var that = this;
                this.model.attributes.open_id = this.getOpenid("open_id");

                var LoadingView = Require('views/LoadingView');
                new LoadingView;

                this.model.save().done(function () {
                    var status = that.model.attributes.status;
                    if (status == 200) {
                        that.render(that.model.toJSON());
                    } else if (status == 400) {
                        // requirejs 循环依赖
                        var BindView = Require('views/BindView');
                        BindView = BindView.extend({
                            attr: that.attr
                        });
                        new BindView;
                    } else if (status == 403) {
                        var SystemErrorView = Require('views/SystemErrorView');
                        new SystemErrorView;
                    } else {
                        var NotFoundView = Require('views/NotFoundView');
                        new NotFoundView;
                    }
                })
            },
            getOpenid: function (param) {
                //构造一个含有目标参数的正则表达式对象
                var reg = new RegExp("(^|&)" + param + "=([^&#]*)(&|#|$)");
                //匹配目标参数
                var r = window.location.search.substr(1).match(reg);
                //返回参数值
                if (r != null) return unescape(r[2]);
                return null;
            },
            window: function () {
                var $win = $(window),
                    $main = $('.main-section');
                if ($win.height() > $main.height()) {
                    $main.height($win.height());
                }
            }
        });
        return AppView;
    });
