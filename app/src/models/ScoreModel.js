define(['backbone'], function (Backbone) {
    var Score = Backbone.Model.extend({
        url: 'http://182.254.159.149/wechat_api/get_score1.php?',
        defaults: {
            "status": 0,
            "open_id": "1234",
            "gpa": "",
            "time": "",
            "detail": []
        }
    });
    return Score;
});
