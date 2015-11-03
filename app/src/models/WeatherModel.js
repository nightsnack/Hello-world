// BindModel,绑定模型。
define(['backbone', 'models/AppModel', 'util/config'], function (Backbone, App) {
    var Weather = App.extend({
        url: weather,
        defaults: {
            status: 0,
            errmsg: "",
            week: "",
            date: "",
            temperature: "",
            weather: ""
        }
    });
    return Weather;
});
