define([
                     "backbone",
                     "router"
            ],
    function (Backbone, AppRouter) {
        var appRouter = new AppRouter();
        Backbone.history.start({
            pushState: true
        });
    });
