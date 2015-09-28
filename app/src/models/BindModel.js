define(['backbone'], function (Backbone) {
    var Bind = Backbone.Model.extend({
        url: 'http://182.254.159.149/wechat_api/primary_binding.php?', //primary_binding open_id=df&student_id=B13010812&zhxy_psw=123456
        defaults: {
            status: 0,
            errmsg: "",
            open_id: "1234",
            name: "",
            student_id: "请输入你的学号",
            zhxy_psw: "",
            jwxt_psw: "",
            opac_psw: "",
            aolan_psw: ""
        },
        initialize: function () {
            var that = this;

            $.ajaxPrefilter("jsonp", function (options, originalOptions, jqXHR) {
                options.crossDomain = {
                    crossDomain: true
                };
                options.xhrFields = {
                    withCredentials: true
                };
            });

            console.log("初始化");
        }
    });
    return Bind;
});
