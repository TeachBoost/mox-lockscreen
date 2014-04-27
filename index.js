/**
 * Lock Screens and Overlays
 */

var Ractive = require( 'ractive/build/ractive.runtime' );

// library
var Lockscreen = {
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