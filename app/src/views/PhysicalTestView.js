define([
            'views/AppView',
            'handlebars',
            'text!templates/physical-test.hbs'
        ],
    function (AppView, Handlebars, template) {
        var PhysicalTestView = AppView.extend({
            title: "体测成绩",
            template: template,
            initialize: function () {
                this.attr = "aolan_psw";
                this.validate();
            }
        });

        return PhysicalTestView;
    });
