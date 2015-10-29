define(['backbone', 'models/AppModel', 'util/config'], function (Backbone, App) {
    var RunningExercise = App.extend({
        url: runningExercise,
        defaults: {
            status: 0,
            errmsg: "",
            open_id: openid,
            times: "",
            detail: []
        }
    });
    return RunningExercise;
});
