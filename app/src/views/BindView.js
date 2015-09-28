define([
        'src/views/AppView',
        'handlebars',
        'text!templates/form.hbs',
        'src/util/HandlebarsHelper'
        ],
    function (AppView, Handlebars, template, handlebarsHelper) {
        var BindView = AppView.extend({
            title: "信息绑定",
            template: template,
            initialize: function () {

                var that = this;
                this.model.save().done(function () {
                    that.render(that.model.toJSON());
//                    console.log(that.model.attributes);
                    $('#myModal').modal('show');
                    that.showErr();
                });

            },
            events: {
                'click #submit': 'bind',
                'focus input[type!=submit]': 'clearInput',
                'blur input[type!=submit]': 'showErr'
            },
            bind: function (e) {

                var that = this;
                $(e.currentTarget).html("正在绑定...");
                this.serialize();
                this.model.save().done(function () {

                    $(e.currentTarget).html("绑定完成");
                    that.$el.empty();

                    that.render(that.model.toJSON());
                    that.showErr();
                });

                return false;
            },
            ui: {
                $student_id: $("#student_id"),
                $zhxy_psw: $("input[name='zhxy_psw']"),
                $jwxt_psw: $("input[name='jwxt_psw']"),
                $opac_psw: $("input[name='opac_psw']"),
                $aolan_psw: $("input[name='aolan_psw']")
            },
            serialize: function () {
                var form = {
                    "student_id": this.ui.$student_id.val(),
                    "zhxy_psw": this.ui.$zhxy_psw.val(),
                    "jwxt_psw": this.ui.$jwxt_psw.val(),
                    "opac_psw": this.ui.$opac_psw.val(),
                    "aolan_psw": this.ui.$aolan_psw.val()
                };
//                console.log(form);
                this.model.set(form);
            },
            showErr: function () {
                var that = this;
                _.each(this.model.attributes, function (element, index, list) {
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
            }
        });
        return BindView;
    });
