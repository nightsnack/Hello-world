define(['backbone', 'src/mock/mockjax'], function (Backbone) {
    var App = Backbone.Model.extend({
        initialize: function () {
            var that = this;
            $.ajaxPrefilter("jsonp", function (options, originalOptions, jqXHR) {
                options.crossDomain = {
                    crossDomain: true
                };
                options.xhrFields = {
                    withCredentials: true
                };
            });
        }
    });
    return App;
});
