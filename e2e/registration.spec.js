/**
 * Created by rca733 on 9/13/15.
 */
describe('Paropakar  Registration Coverage', function() {
    beforeEach(function () {
        browser.get('/auth/register');
        browser.waitForAngular();
    });

    it("Test Registration Page Validation", function () {

        var name = element.all(by.model('reg.user.name'));
        var nameValue = element(by.model('reg.user.name')).getAttribute('value');
        name.click();
        name.sendKeys('Tname2');
        var email = element.all(by.model('reg.user.email'));
        email.click();
        email.sendKeys('Tname2@email.com');
        var username = element.all(by.model('reg.user.username'));
        username.click();
        username.sendKeys('Tname2');
        var password = element.all(by.model('reg.user.password'));
        password.click();
        password.sendKeys('password');
        var confirmPassword = element.all(by.model('reg.user.confirmPassword'));
        confirmPassword.click();
        confirmPassword.sendKeys('password');
        var submitButton = element.all(by.css(".submit_button"));
        submitButton.click();
        var errorMsg = element(by.repeater('error in reg.registerError').row(0).column('error.msg'));
        expect(errorMsg.getText()).toMatch('E-mail address is already in-use');
        name.click();
        name.clear();
        name.sendKeys('Tname3');
        email.click();
        email.clear();
        email.sendKeys('Tname3@email.com');
        username.click();
        username.clear();
        username.sendKeys('Tname3');
        submitButton.click();
        expect(browser.getCurrentUrl()).toMatch('');
        var user = element(by.binding('hdrctr.hdrvars.user.name'));
        expect(user.getText()).toMatch(nameValue);

    });

});