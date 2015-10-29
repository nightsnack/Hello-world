define([
        'views/AppView',
        'handlebars',
        'text!templates/card.hbs'
    ],
    function (AppView, Handlebars, template) {
        var CardView = AppView.extend({
            title: "一卡通",
            template: template,
            initialize: function () {
                this.attr = "zhxy_psw";
                this.validate();
            }
        });

        return CardView;
    });
