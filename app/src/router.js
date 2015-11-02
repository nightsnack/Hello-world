define([
    'backbone',
    'views/BindView',
    'views/IndexView',
    'views/PhysicalTestView',
    'views/ScheduleView',
    'views/ScoreView',
    'views/UnbindView',
    'views/RankTestView',
    'views/SystemErrorView',
    'views/NotFoundView',
    'views/RunningExerciseView',
    'views/CardView',
    'views/LoadingView',
    'views/AboutView',
    'models/BindModel',
    'models/RankTestModel',
    'models/UnbindModel',
    'models/ScoreModel',
    'models/PhysicalTestModel',
    'models/RunningExerciseModel',
    'models/CardModel'
],
    function (Backbone, BindView, IndexView, PhysicalTestView,
        ScheduleView, ScoreView, UnbindView, RankTestView,
        SystemErrorView, NotFoundView, RunningExerciseView,
        CardView, LoadingView, AboutView, Bind, RankTest, Unbind, Score, PhysicalTest,
        RunningExercise, Card) {

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
                "running-exercise": "showRunningExercise",
                "card": "showCard",
                "success": "showSuccess",
                "403": "showSystemError",
                "404": "showNotFound",
                "loading": "showLoading",
                "about": "showAbout"
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
            showRunningExercise: function () {
                var runningExercise = new RunningExercise;
                var runningExerciseView = new RunningExerciseView({
                    model: runningExercise
                });
            },
            showCard: function () {
                var card = new Card;
                var cardView = new CardView({
                    model: card
                });
            },
            showSystemError: function () {
                new SystemErrorView;
            },
            showNotFound: function () {
                new NotFoundView;
            },
            showLoading: function () {
                new LoadingView;
            },
            showAbout: function () {
                new AboutView;
            }
        });


        return AppRouter;
    });
