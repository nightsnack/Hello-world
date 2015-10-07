define(['backbone', 'models/AppModel', 'src/mock/mockjax'], function (Backbone, App) {
    var Bind = App.extend({
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
        }
    });
    return Bind;
});
