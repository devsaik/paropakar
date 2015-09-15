/**
 * Created by rca733 on 9/14/15.
 */
describe('Paropakar  Articles CRUD Coverage', function() {
    var recordId;
    beforeEach(function () {


    });

    it("Article create operation ", function () {
        browser.get('/auth/login');
        browser.waitForAngular();

        var email = element.all(by.model('login.user.email'));
        email.click();
        email.sendKeys('Tname2@email.com');

        var password = element.all(by.model('login.user.password'));
        password.click();
        password.sendKeys('password');

        var submitButton = element.all(by.css(".submit_button"));
        submitButton.click();
        browser.waitForAngular();
        browser.get('http://localhost:9000/articles/create');
        browser.waitForAngular();
        var title = element.all(by.model('article.title'));
        title.click();
        title.sendKeys('Arizona');
        var content = element.all(by.model('article.content'));
        content.click();
        content.sendKeys('On going shootings on Highway ');
        var submit = element.all(by.buttonText('Submit'));
        submit.click();
        browser.waitForAngular();
        browser.getLocationAbsUrl().then(function(url){
            console.log("here url "+url);
            var arrayOfUrls = url.split('/articles/');
            recordId = arrayOfUrls[1];
        });



    });
    it("Article edit  operation ", function () {

        browser.get('/articles/'+recordId+'/edit');
        browser.waitForAngular();
        var title = element(by.model('article.title'));
        var titleValue = element(by.model('article.title')).getAttribute('value');
        expect(titleValue).toMatch('Arizona');
        title.clear();
        title.sendKeys('Arizona Changed');
        var submit = element.all(by.buttonText('Submit'));
        submit.click();
        browser.waitForAngular();
        var newTitle = element(by.css('h2'));
        expect(newTitle.getText()).toMatch('Arizona Changed');

    });

    it("Article Delete  operation ", function () {

        browser.get('/articles/'+recordId);
        browser.waitForAngular();
        var deleteButton = element(by.css('.glyphicon-trash'));
        deleteButton.click();
        browser.waitForAngular();
        element.all(by.repeater('article in articles')).count().then(function(count){
            expect(count).toBe(0);

        })

    });

    afterEach(function(){

    });

});
