require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        jcrop: '../bower_components/jcrop/js/jquery.Jcrop.min'
    },
    shim: {
        jcrop: {
            deps: [
                'jquery'
            ]
        }
    }

});

require([
    "app"
], function (App) {
    'use strict';
    App.init();
});
