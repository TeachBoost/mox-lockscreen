/**
 * Lock Screens and Overlays
 */

// library
var Lockscreen = {
    // show the offline screen
    showOffline: function () {
        var Ractive = require( './views/offline.ract' ),
            View = new Ractive({
                el: 'body',
                append: true,
                complete: function () {
                    this.on( 'workoffline', function () {
                        console.log( 'Offline mode enabled' );
                    });
                }
            });
    },
    // show the error lock screen
    showError: function ( message, buttons ) {
        var Ractive = require( './views/error.ract' ),
            View = new Ractive({
                el: 'body',
                append: true,
                data: {
                    message: message,
                    buttons: buttons
                }
            });
    }
};

// return
module.exports = Lockscreen;