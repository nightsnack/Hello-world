// UnbindModel, 解绑模型。
define(['backbone','models/AppModel', 'util/config'], function (Backbone, App) {
    var Unbind = App.extend({
        url: unbind,
        defaults: {
            "status": 0,
            "open_id": openid,
            "zhxy_psw": ""
        }
    });
    return Unbind;
});
