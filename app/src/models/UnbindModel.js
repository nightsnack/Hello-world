define(['backbone', 'models/BindModel'], function (Backbone, Bind) {
    var Unbind = Bind.extend({
        url: "http://182.254.159.149/wechat_api/unbinding.php"
    });
    return Unbind;
});
