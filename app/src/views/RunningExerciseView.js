define([
        'views/AppView',
        'handlebars',
        'text!templates/running-exercise.hbs'
    ],
    function (AppView, Handlebars, template) {
        var RuningExerciseView = AppView.extend({
            title: "跑操查询",
            template: template,
            initialize: function () {
                this.attr = "zhxy_psw";
                this.validate();
            }
        });
        return RuningExerciseView;
    });
