'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function () {

    beforeEach(function () {
        browser().navigateTo('../../app/index.html');
    });


    it('should automatically redirect to /users when location hash/fragment is empty', function () {
        expect(browser().location().url()).toBe("/users");
    });


    describe('users', function () {

        beforeEach(function () {
            browser().navigateTo('#/users');
        });


        it('should render users when user navigates to /', function () {
            expect(element('[ng-view] p:first').text()).
                toMatch(/partial for users/);
        });

    });

});
