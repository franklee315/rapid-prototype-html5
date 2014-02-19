require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        jcrop: '../bower_components/jcrop/js/jquery.Jcrop.min',
        requirejs: '../bower_components/requirejs/require'
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
