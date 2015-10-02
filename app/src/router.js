define([
 'backbone',
  'src/views/BindView',
  'src/views/IndexView',
  'src/views/PhysicalTestView',
  'src/views/ScheduleView',
  'src/views/ScoreView',
  'src/views/UnbindView',
  'src/models/BindModel',
  'src/models/ScoreModel'
],
    function (Backbone, BindView, IndexView, PhysicalTestView,
              ScheduleView, ScoreView, UnbindView, Bind, Score) {

        var AppRouter = Backbone.Router.extend({
            /* define the route and function maps for this router */
            routes: {
                "": "showIndex",
                "score": "showScore",
                "schedule": "showSchedule",
                "physical-test": "showPhysicalTest",
                "bind": "showBind",
                "unbind": "showUnbind",
                "success": "showSuccess",
                "error": "showError",
                "404": "showNotFound"
            },
            showIndex: function () {
                var indexView = new IndexView;
            },
            showScore: function () {
                var score = new Score;
                var scoreView = new ScoreView({
                    model: score
                });
            },
            showSchedule: function () {
                var schedule = new ScheduleView;
            },
            showPhysicalTest: function () {
                var physicalTest = new PhysicalTestView;
            },
            showBind: function () {
                var bind = new Bind;
                var bindView = new BindView({
                    model: bind
                });
            },
            showUnbind: function () {
                var unbind = new Bind;
                unbind.url = "http://182.254.159.149/wechat_api/unbinding.php"; //?open_id=df&student_id=B13010812&zhxy_psw=123456
                var unbindView = new UnbindView({
                    model: unbind
                });
            },
            showSuccess: function () {
                $('#container').text("success");
            },
            showError: function () {
                $('#container').text("error");
            },
            showNotFound: function () {
                $('#container').text("404 not found!");
            }
        });


        return AppRouter;
    });
