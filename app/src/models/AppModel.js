// AppModel,放置所有Model的公共方法
define(['backbone'], function (Backbone) {
    var App = Backbone.Model.extend({
        initialize: function () {
            // ajax预处理，跨域，发送跨域请求
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
