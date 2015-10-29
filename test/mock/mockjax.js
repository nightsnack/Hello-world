define(['jquery', 'mockjax', 'test/mock/data'], function ($, Mockjax, data) {
    Mockjax({
        url: "http://182.254.159.149/wechat_api/primary_binding.php?",
        response: function (setting) {
            var bind = setting.data && $.parseJSON(setting.data);
            return this.responseText = bind1;
        }
    });
    Mockjax({
        url: "http://182.254.159.149/wechat_api/get_score2.php?",
        responseText: score
    });
    Mockjax({
        url: "http://182.254.159.149/wechat_api/get_rank_test.php",
        responseText: rankTest
    });
    Mockjax({
        url: "http://182.254.159.149/wechat_api/exercise.php",
        responseText: physicalTest
    });

});
