require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery'
    }
});

require([
    "app"
], function (App) {
    'use strict';
    App.init();
});
