/**
 * Created by rca733 on 9/13/15.
 */
describe('Paropakar  Authentication Coverage', function() {
    beforeEach(function () {
        browser.get('');
        browser.waitForAngular();
        browser.get('/auth/login');
        browser.waitForAngular();
    });

    it("Test Login Page", function () {

        var email = element.all(by.model('login.user.email'));
        email.click();
        email.sendKeys('Tname2@email.com');

        var password = element.all(by.model('login.user.password'));
        password.click();
        password.sendKeys('password');

        var submitButton = element.all(by.css(".submit_button"));
        submitButton.click();

        browser.waitForAngular();
        expect(browser.getCurrentUrl()).toMatch('');

        var username = element(by.binding("hdrctr.hdrvars.user.name"));
        expect(username.getText()).toMatch("Tname2");
        username.click();

        var logout = element(by.cssContainingText(".dropdown-menu", "Log Out"));
        logout.click();
    });
});