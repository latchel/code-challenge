'use strict';

/* jasmine specs for controllers go here */

describe('UsersController', function () {

    var scopeMock;

    beforeEach(module('myApp'));

    beforeEach(
        inject(
            function( $rootScope, $controller ){
                scopeMock = $rootScope.$new();
                $controller( 'UsersController', {$scope: scopeMock} );
            }
        )
    );

    it('should exist', function() {
        expect(scopeMock).toBeDefined();
    });

});


describe('CardsController', function () {
    var scopeMock;

    beforeEach(module('myApp'));

    beforeEach(
        inject(
            function( $rootScope, $controller ){
                scopeMock = $rootScope.$new();
                $controller( 'CardsController', {$scope: scopeMock} );
            }
        )
    );

    it('should exist', function() {
        expect(scopeMock).toBeDefined();
    });

});
