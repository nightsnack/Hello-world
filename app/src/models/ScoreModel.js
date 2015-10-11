define(['backbone', 'util/config'], function (Backbone) {
    var Score = Backbone.Model.extend({
        url: score,
        defaults: {
            "status": 0,
            "open_id": openid,
            "gpa": "",
            "time": "",
            "detail": []
        }
    });
    return Score;
});
