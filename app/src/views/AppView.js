define([
            'require',
            'backbone',
            'handlebars',
            'src/views/BindView'
        ],
    function (Require, Backbone, Handlebars, BindView) {
        var AppView = Backbone.View.extend({
            el: $('#main'),
            events: {
                'click #refresh': 'refresh'
            },
            model: {},
            initialize: function () {
                this.render();
            },
            refresh: function () {
                location.reload();
            },
            render: function (data) {
                var compile = Handlebars.compile(this.template);
                this.$el.html(compile(data));
                $('.navbar-brand').text(this.title);
                return this;
            },
            validate: function () {
                var that = this,
                    BindView;
                this.model.fetch().done(function () {
                    if (that.model.attributes.status == 200) {
                        that.render(that.model.toJSON());
                    } else {
                        // requirejs 循环依赖
                        BindView = Require('src/views/BindView');
                        new BindView;
                    }
                })
            }
        });
        return AppView;
    });
