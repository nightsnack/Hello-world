define(['backbone'], function (Backbone) {
    var Bind = Backbone.Model.extend({
        url: 'http://182.254.159.149/wechat_api/primary_binding.php?',
        defaults: {
            status: 0,
            errmsg: "",
            open_id: "1234",
            name: "",
            student_id: "",
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
        }
    });
    return Bind;
});
