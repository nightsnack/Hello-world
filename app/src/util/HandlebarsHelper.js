define(['handlebars', 'text!templates/offcanvas.hbs'], function (Handlebars, offcanvasTemplate) {
    //自定义handlebars helper
    var handlebarsID = 0;

    Handlebars.registerHelper('a-link-id', function () {
        handlebarsID++;
        return new Handlebars.SafeString('<a data-toggle="collapse" data-parent="#accordion" href="#' + handlebarsID + '">');
    });

    Handlebars.registerHelper('div-id', function () {
        return new Handlebars.SafeString('<div id="' + handlebarsID + '" class="panel-collapse collapse in">');
    });
    Handlebars.registerHelper('offcanvas', function (context, options) {
        var template = Handlebars.compile(offcanvasTemplate);
        return new Handlebars.SafeString(template(options.fn(context)));
    });
});
