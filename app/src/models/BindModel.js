// BindModel,绑定模型。
define(['backbone', 'models/AppModel', 'util/config'], function (Backbone, App) {
    var Bind = App.extend({
        url: bind,
        defaults: {
            status: 0,
            errmsg: "",
            open_id: openid,
            keyword: "",
            detail: {
                student_id: "",
                zhxy_psw: "",
                jwxt_psw: "",
                opac_psw: "",
                aolan_psw: ""
            }
        }
    });
    return Bind;
});
