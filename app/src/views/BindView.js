define([
        'views/AppView',
        'views/IndexView',
        'views/SystemErrorView',
        'views/NotFoundView',
        'models/BindModel',
        'handlebars',
        'text!templates/bind.hbs',
        'util/HandlebarsHelper'
        ],
    function (AppView, IndexView, SystemErrorView, NotFoundView, BindModel, Handlebars, template) {
        var BindView = AppView.extend({
            title: "信息绑定",
            template: template,
            initialize: function () {
                //初始化页面
                var that = this;
                this.model = new BindModel;
                this.model.attributes.open_id = this.getOpenid("open_id");
                this.model.attributes.keyword = this.attr;
                this.model.save().done(function () {
                    var status = that.model.attributes.status;
                    if (status == 200) {
                        that.refresh();
                    } else if (status == 400) {
                        that.filter();
                        that.render(that.model.toJSON());
                        that.showErr();
                    } else if (status == 403) {
                        new SystemErrorView;
                    } else {
                        new NotFoundView;
                    }
                });

            },
            events: {
                'click #submit': 'bind',
            },
            bind: function (e) {
                // 绑定，保存model到服务器，并根据结果渲染页面
                e.preventDefault();
                var that = this;
                $(e.currentTarget).html("正在绑定...");
                this.serialize();
                this.model.attributes.keyword = "";
                this.model.save().done(function () {
                    var status = that.model.attributes.status;
                    if (status == 200) {
                        $(e.currentTarget).html("绑定完成");
                        that.refresh();
                    } else if (status == 400) {
                        $('input').val("");
                        that.showErr();
                        $(e.currentTarget).html("确认绑定");
                    } else if (status == 403) {
                        new SystemErrorView;
                    } else {
                        new NotFoundView;
                    }
                });

                return false;
            },
            ui: {
                //缓存jQuery对象
                $student_id: $("#student_id"),
                $zhxy_psw: $("input[name='zhxy_psw']"),
                $jwxt_psw: $("input[name='jwxt_psw']"),
                $opac_psw: $("input[name='opac_psw']"),
                $aolan_psw: $("input[name='aolan_psw']")
            },
            serialize: function () {
                //表单序列化
                var serializeForm = {},
                    form = $('form').serializeArray();

                $(form).each(function (index, element) {
                    serializeForm[element.name] = element.value;
                });
                this.model.set({
                    detail: serializeForm
                });
            },
            showErr: function () {
                var that = this;
                _.each(this.model.attributes.detail, function (element, index, list) {
                    //console.log(element + "  " + index);
                    var $index = $("input[name='" + index + "']");
                    if (element) {
                        console.log(element);
                        $index.attr("placeholder", element);
                    } else {
                        $index.val() || $index.val("         ");
                    }

                })
            },
            clearInput: function (e) {
                var $currentTarget = $(e.currentTarget);
                $currentTarget.val("");
            },
            reset: function () {
                var init = {
                    detail: {
                        "student_id": "",
                        "zhxy_psw": "",
                        "jwxt_psw": "",
                        "opac_psw": "",
                        "aolan_psw": ""
                    }
                };
                this.model.set(init);
            },
            filter: function () {
                var attr = this.model.attributes.detail[this.attr];
                var student_id = this.model.attributes.detail.student_id;
                if (attr) {
                    this.reset();
                    this.model.attributes.detail[this.attr] = attr;
                    this.model.attributes.detail.student_id = student_id;
                }
            }
        });
        return BindView;
    });
