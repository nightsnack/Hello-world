define(['backbone', 'models/AppModel', 'util/config'], function (Backbone, App) {
    var Card = App.extend({
        url: card,
        defaults: {
            status: 0,
            errmsg: "",
            open_id: openid,
            times: "",
            detail: []
        }
    });
    return Card;
});
