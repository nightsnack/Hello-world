// PhysicalTestModel, 体测模型。
define(['backbone', 'models/AppModel', 'util/config'], function (Backbone, App) {
    var PhysicalTest = App.extend({
        url: physicalTest,
        defaults: {
            status: 0,
            errmsg: "",
            open_id: openid,
            results: []
        }
    });
    return PhysicalTest;
});
