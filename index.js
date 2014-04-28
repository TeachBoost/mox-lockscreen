/**
 * Lock Screens and Overlays
 */

// dependencies
var Ractive = require( 'ractive/build/ractive.runtime' ),
    $ = require( 'jquery' );

// library
var Lockscreen = {
    // hide the loading screen, if there is one and if
    // it's not already hidden.
    loadingHidden: false,
    hideLoading: function () {
        // if it's hidden, return true
        if ( this.loadingHidden ) {
            return true;
        }
        // get the loading element; if it doesn't exist then
        // get out.
        var $loading = $( '#loading' );
        this.loadingHidden = true;
        if ( ! $loading.length ) {
            return true;
        }
        // fade the loading screen out
        $loading.fadeOut( 250 );
        return true;       
    },
    // set the global lock class
    setLock: function () {
        $( 'body' ).addClass( 'with-global-lock' );
    }
    // show the offline screen
    showOffline: function () {
        var View = Ractive.extend({
            el: 'body',
            template: require( './views/offline.ract' ).template,
            append: true,
            complete: function () {
                this.on( 'workoffline', function () {
                    console.log( 'Offline mode enabled' );
                });
            }
        });

        return new View();
    },
    // show the error lock screen
    showError: function ( message, buttons ) {
        var View = Ractive.extend({
            el: 'body',
            template: require( './views/error.ract' ).template,
            append: true,
            data: {
                message: message,
                buttons: buttons
            }
        });

        return new View();
    }
};

// return
module.exports = Lockscreen;
