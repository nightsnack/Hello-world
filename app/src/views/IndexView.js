define([
            'views/AppView',
            'rainyday',
            'handlebars',
            'text!templates/index.hbs'
        ],
    function (AppView, rainyday, Handlebars, template) {
        var IndexView = AppView.extend({
            title: "爱服务首页",
            template: template,
            initialize: function () {
                this.render();
                //var image = document.getElementById('bg-img');
                var engine = new RainyDay({
                    image: document.getElementById('bg-img'),
                    parentElement: document.getElementById('bg')
                });
                //engine.rain([[1, 2, 3000]]);
                engine.rain([[3, 3, 0.88], [5, 5, 0.9], [6, 2, 1]], 10);
            }

        });
        return IndexView;
    });
