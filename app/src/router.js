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
                console.log("Index Start");
                var indexView = new IndexView;
                console.log("Index End");
            },
            showScore: function () {
                console.log("Score Start");
                var score = new Score;
                var scoreView = new ScoreView({
                    model: score
                });
                console.log("Score End");
            },
            showSchedule: function () {
                console.log("Schedule Start");
                var schedule = new ScheduleView;
                console.log("Schedule End");
            },
            showPhysicalTest: function () {
                console.log("PhysicalTest Start");
                var physicalTest = new PhysicalTestView;
                console.log("PhysicalTest End");
            },
            showBind: function () {
                console.log("Bind Start");
                var bind = new Bind;
                var bindView = new BindView({
                    model: bind
                });
                console.log("Bind End");
            },
            showUnbind: function () {
                console.log("Unbind Start");
                var unbind = new Bind;
                unbind.url = "http://182.254.159.149/wechat_api/unbinding.php"; //?open_id=df&student_id=B13010812&zhxy_psw=123456
                var unbindView = new UnbindView({
                    model: unbind
                });
                console.log("Unbind End");
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
