define(['mockjax', 'src/mock/data'], function (Mockjax, data) {
    Mockjax({
        url: "http://182.254.159.149/wechat_api/primary_binding.php?",
        responseText: bind1
    });
    Mockjax({
        url: "http://182.254.159.149/wechat_api/get_score1.php?",
        responseText: score
    });
});
