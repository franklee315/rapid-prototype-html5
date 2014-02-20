/**
 * @desc
 * @module
 * @author lifan
 * @version
 * @todo Created on 14-2-20.
 */
define([
    "jquery",
    "jcrop"
], function ($) {

    'use strict';

    function preview(c) {
        $(".cut_button").show();

        //得到选中区域左上角横坐标
        console.debug("selection.x:" + c.x);
        //得到选中区域左上角纵坐标
        console.debug("selection.y:" + c.y);
        //得到选中区域右下角横坐标
        console.debug("selection.x2:" + c.x2);
        //得到选中区域右下角纵坐标
        console.debug("selection.y2:" + c.y2);
        //得到选中区域的宽度
        console.debug("selection.w:" + c.w);
        //得到选中区域的高度
        console.debug("selection.h:" + c.h);
    };

    return {
        init: function ($img) {
            var that = this;

            $img.Jcrop({
                onChange: preview,
                onSelect: preview
            });

            var divs = $(".cut_button > div");

            $(divs[0]).click(function () {
                that.cut();
            });
            $(divs[1]).click(function () {
                that.cancle();
            });
        },

        cut: function () {
            console.debug("cut");
        },

        cancle: function () {
            $(".cut_button").hide();
        }
    };
});