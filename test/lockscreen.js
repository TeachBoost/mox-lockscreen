/**
 * Tests for the different lock screens and overlays
 */

var expect = chai.expect;

describe( 'Lockscreen', function () {

    it( 'should be an object', function () {
        expect( Lockscreen )
            .to.be.a( 'object' );
    });

    it( 'should contain #error', function () {
        Lockscreen.showError( 'message' );
        var $error = $( '#error' );
        expect( $error.length )
            .to.be.equal( 1 );
        $error.remove();
    });

    it( 'should contain #error with a button', function () {
        Lockscreen.showError( 'message', [{
            text: 'button',
            url: 'http://example.com'
        }]);
        var $error = $( '#error' );
        expect( $error.find( '.huge.blue.btn' ).length )
            .to.be.equal( 1 );
        $error.remove();
    });

    it( 'should contain #error with a message', function () {
        Lockscreen.showError( 'message', [{
            text: 'button',
            url: 'http://example.com'
        }]);
        var $error = $( '#error' );
        expect( $error.find( '.message' ).text() )
            .to.equal( 'message' );
        $error.remove();
    });

    it( 'should hide the loading screen', function () {
        var $loading = $( '<div/>', { id: 'loading' } )
            .appendTo( 'body' );
        expect( $( '#loading' ).length )
            .to.equal( 1 );
        expect( Lockscreen.hideLoading( 0 ) )
            .to.equal( true );
        expect( $( '#loading' ).is( ':visible' ) )
            .to.equal( false );
        $loading.remove();
        expect( $( '#loading' ).length )
            .to.equal( 0 );
    });

    it( 'should set lock class on body', function () {
        Lockscreen.setLock();
        expect( $( 'body' ).hasClass( 'with-global-lock' ) )
            .to.equal( true );
    });

});