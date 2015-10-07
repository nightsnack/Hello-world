define([
 'backbone',
  'test/views/BindView',
  'views/IndexView',
  'views/PhysicalTestView',
  'views/ScheduleView',
  'views/ScoreView',
  'views/UnbindView',
  'views/RankTestView',
  'models/BindModel',
  'models/RankTestModel',
  'models/UnbindModel',
  'models/ScoreModel',
  'models/PhysicalTestModel'
],
    function (Backbone, BindView, IndexView, PhysicalTestView,
        ScheduleView, ScoreView, UnbindView, RankTestView, Bind, RankTest, Unbind, Score, PhysicalTest) {

        var AppRouter = Backbone.Router.extend({
            /* define the route and function maps for this router */
            routes: {
                "": "showIndex",
                "score": "showScore",
                "schedule": "showSchedule",
                "physical-test": "showPhysicalTest",
                "bind": "showBind",
                "rank-test": "showRankTest",
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
                var physical = new PhysicalTest;
                var physicalTestView = new PhysicalTestView({
                    model: physical
                });
            },
            showBind: function () {
                var bind = new Bind;
                var bindView = new BindView({
                    model: bind
                });
            },
            showRankTest: function () {
                var rank = new RankTest;
                var rankTestView = new RankTestView({
                    model: rank
                });
            },
            showUnbind: function () {
                var unbind = new Unbind;
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
