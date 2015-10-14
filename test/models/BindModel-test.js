define(["mocha", "chai", "models/BindModel"], function (mocha, chai, Bind) {
    var bind = new Bind,
        expect = chai.expect;
    describe('Bind', function () {
        describe('.url', function () {
            it('should be a String', function () {
                expect(bind.url).to.be.a('string');
            })
        })
    })

});
