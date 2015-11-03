define([
            'views/AppView',
            'models/WeatherModel',
            'rainyday',
            'skycons',
            'handlebars',
            'text!templates/index.hbs'
        ],
    function (AppView, Weather, Rainyday, SkyCons, Handlebars, template) {
        var IndexView = AppView.extend({
            title: "爱服务首页",
            template: template,
            initialize: function () {
                var that = this;
                this.model = new Weather;
                this.model.fetch().done(function () {
                    console.log(that.model.attributes);
                    that.render();
                    that.background(that.model.attributes.url);
                    that.rainyday(that.model.attributes.url);
                    that.skycons();
                });
            },
            rainyday: function () {
                var image = document.getElementById('bg-img');
                var engine = new RainyDay({
                    image: image,
                    parentElement: document.getElementById('bg')
                });
                //engine.rain([[1, 2, 3000]]);
                engine.rain([[3, 3, 0.88], [5, 5, 0.9], [6, 2, 1]], 10);
            },
            skycons: function () {
                var skycons = new Skycons({
                    "color": "white"
                });
                skycons.add("icon", Skycons.PARTLY_CLOUDY_DAY);
                skycons.play();
            },
            background: function (imgsrc) {
                $('#bg-img').attr({
                    src: imgsrc,
                    crossOrigin: 'anonymous'
                });
            }

        });
        return IndexView;
    });
