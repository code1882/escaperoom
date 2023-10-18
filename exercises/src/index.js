/* jshint browser: true, esversion: 5, asi: true */
/*globals uibuilder, Vue */
'use strict'

//const { default: Vue } = require( 'vue/types/umd' )

/** @see https://github.com/TotallyInformation/node-red-contrib-uibuilder/wiki/Front-End-Library---available-properties-and-methods */

// @ts-ignore
var app = new Vue({
    // The HTML element to attach to
    el: '#app',
    /** Pre-defined data
     *  Anything defined here can be used in the HTML
     *  if you update it, the HTML will automatically update
     */
    data: {
        msg: '[Nothing Recieved Yet]',
    },

    // Called when Vue is fully loaded
    mounted: function () {
        //Start uibuilder
        uibuilder.start();
        // Keep a convenient reference to the Vue app
        var vueApp = this;

        /** Triggered when the node on the Node-RED server
         *  recieves a (non-control) msg
         */
        // @ts-ignore
        uibuilder.onChange('msg', function(msg) {
            vueApp.msg = msg;
        });

        // Send message back to node-red
        // uibuilder.send({payload:'some message'})
    },

}); // --- End of the Vue app definition --- //

// EOF
