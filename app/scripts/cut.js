/**
 * @desc
 * @module
 * @author lifan
 * @version
 * @todo Created on 14-2-20.
 */
define([
    "jquery",
    "imgareaselect"
], function ($) {

    'use strict';

    function preview(img, selection) {
        if (!selection.width || !selection.height)
            return;
//
//        var scaleX = 100 / selection.width;
//        var scaleY = 100 / selection.height;

//        $('#preview img').css({
//            width: Math.round(scaleX * 700),
//            height: Math.round(scaleY * 1276),
//            marginLeft: -Math.round(scaleX * selection.x1),
//            marginTop: -Math.round(scaleY * selection.y1)
//        });
        $(".cut_button").show();

        //得到选中区域左上角横坐标
        console.debug("selection.x:" + selection.x1);
        //得到选中区域左上角纵坐标
        console.debug("selection.y:" + selection.y1);
        //得到选中区域右下角横坐标
        console.debug("selection.x2:" + selection.x2);
        //得到选中区域右下角纵坐标
        console.debug("selection.y2:" + selection.y2);
        //得到选中区域的宽度
        console.debug("selection.w:" + selection.width);
        //得到选中区域的高度
        console.debug("selection.h:" + selection.height);
    };

    var onSelectStart = function () {
        $(".cut_button").hide();
    };

    return {
        init: function ($img) {
            var cutText = $(".cut_text");
            cutText.text("请选择截图区域");
            cutText.show();

            var that = this;

            var imgAreaSelect = $img.imgAreaSelect({
                instance: true,
                handles: true,
                fadeSpeed: 200,
                onSelectEnd: preview,
                onSelectStart: onSelectStart
            });

            var divs = $(".cut_button > div");

            $(divs[0]).click(function () {
                that.cut();
            });
            $(divs[1]).click(function () {
                that.cancle(imgAreaSelect);
            });
        },

        cut: function () {
            console.debug("cut");
        },

        cancle: function (imgAreaSelect) {
            imgAreaSelect.cancelSelection();
            $(".cut_button").hide();
        }
    };
});