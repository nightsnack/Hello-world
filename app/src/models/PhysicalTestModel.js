define(['backbone', 'models/AppModel'], function (Backbone, App) {
    var PhysicalTest = App.extend({
        url: 'http://182.254.159.149/wechat_api/exercise.php',
        defaults: {
            status: 0,
            errmsg: "",
            open_id: "1234",
            results: []
        }
    });
    return PhysicalTest;
});
