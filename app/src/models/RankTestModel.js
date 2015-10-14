// RankTestModel, 等级测试模型。
define(['backbone', 'models/AppModel', 'util/config'], function (Backbone, App) {
    var RankTest = App.extend({
        url: rankTest,
        defaults: {
            status: 0,
            errmsg: "",
            open_id: openid,
            time: "",
            detail: []
        }
    });
    return RankTest;
});
