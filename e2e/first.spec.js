/**
 * Created by rca733 on 9/13/15.
 */
describe('Paropakar Coverage', function() {
    beforeEach(function () {
        browser.get('/auth/login');
        browser.waitForAngular();
    });
    it("True is True",function(){
        expect(true).toBe(true);
    });
});