define(['handlebars', 'text!templates/navbar.hbs'], function (Handlebars, navbarTemplate) {
            var handlebarsID = 0;

            Handlebars.registerHelper('a-link-id', function () {
                handlebarsID++;
                return new Handlebars.SafeString('<a data-toggle="collapse" data-parent="#accordion" href="#' + handlebarsID + '">');
            });

            Handlebars.registerHelper('div-id', function () {
                return new Handlebars.SafeString('<div id="' + handlebarsID + '" class="panel-collapse collapse in">');
            });
            Handlebars.registerHelper('navbar', function () {
                var template = Handlebars.compile(navbarTemplate);
                return new Handlebars.SafeString(template());
            });
});
