define(['handlebars', 'text!templates/navbar.hbs'], function (Handlebars, navbarTemplate) {
    function navbar () {
        console.log($(navbarTemplate).html());
        var template = Handlebars.compile(navbarTemplate);
    }
    Handlebars.registerHelper('navbar', navbar);
    return new Handlebars.SafeString(navbar());
});
