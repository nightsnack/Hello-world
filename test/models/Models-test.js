define([
    "mocha",
    "chai",
    "models/AppModel",
    "models/BindModel",
    "models/PhysicalTestModel",
    "models/RankTestModel",
    "models/ScoreModel",
    "models/UnbindModel"
],
    function (mocha, chai, App, Bind, PhysicalTest, RankTest, Score, Unbind) {
        var app = new App,
            bind = new Bind,
            physicalTest = new PhysicalTest,
            rankTest = new RankTest,
            score = new Score,
            unbind = new Unbind,
            expect = chai.expect;
        describe('Modles Test', function () {
            describe('BindModel Test', function () {
                it('should be equal BindModel url', function () {
                    expect(bind.url).to.equal('http://182.254.159.149/wechat_api/primary_binding.php?');
                });
            });
            describe('PhysicalTestModel Test', function () {
                it('should be equal PhysicalTestModel url', function () {
                    expect(physicalTest.url).to.equal('http://182.254.159.149/wechat_api/exercise.php');
                });
            });
            describe('RankTestModel Test', function () {
                it('should be equal RankTestModel url', function () {
                    expect(rankTest.url).to.equal('http://182.254.159.149/wechat_api/get_rank_test.php');
                });
            });
            describe('ScoreModel Test', function () {
                it('should be equal ScoreModel url', function () {
                    expect(score.url).to.equal('http://182.254.159.149/wechat_api/get_score1.php?');
                });
            });
            describe('UnbindModel Test', function () {
                it('should be equal UnbindModel url', function () {
                    expect(unbind.url).to.equal('http://182.254.159.149/wechat_api/unbinding.php');
                });
            });
        });
    });
