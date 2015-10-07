define(['backbone', 'models/AppModel', 'src/mock/mockjax'], function (Backbone, App) {
    var RankTest = App.extend({
        url: 'http://182.254.159.149/wechat_api/get_rank_test.php',
        defaults: {
            status: 0,
            errmsg: "",
            open_id: "1234",
            time: "",
            detail: []
        }
    });
    return RankTest;
});
