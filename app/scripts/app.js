/**
 * @desc
 * @module
 * @author lifan
 * @version
 * @todo Created on 14-2-17.
 */
define([
    "jquery",
    "transition"
], function ($, Transition) {

    'use strict';

    return {
        init: function () {
            var that = this;
            $.getJSON("config.json", function (data) {
                var body = $("body");

                $.each(data, function (infoIndex, info) {
                    var imgWidth = info["width"];
                    var imgName = info["name"];
                    var level = info["level"];
                    var id = imgName.substring(0, imgName.length - 4);

                    console.debug("imgName:" + imgName);
                    console.debug("id:" + id);
                    console.debug("imgWidth:" + imgWidth);
                    console.debug("level:" + level);


                    var $imgDiv = $("<div></div>");
                    $imgDiv.attr("id", id);
                    body.append($imgDiv);

                    if (level) {
                        $imgDiv.show();
                        console.debug(id + "show");
                    } else {
                        $imgDiv.hide();
                        console.debug(id + "hide");
                    }

                    var $img = $("<img>");
                    $img.attr("src", "images/" + imgName);
                    $img.attr("width", "100%");
                    $img.attr("usemap", "#" + id + "Map");
                    $imgDiv.append($img);

                    var map = info["actions"];
                    if (map) {
                        var $map = $("<map></map>");
                        $map.attr("name", id + "Map");
                        $imgDiv.append($map);

                        $.each(map, function (infoIndex, info) {
                            var animation = info["animation"];

                            var $area = $("<area shape='rect'>");
                            $area.attr("coords", that.scale(info["point"], imgWidth));
                            $area.click(function () {
                                if (animation) {
                                    console.debug("outDiv:#" + id);
                                    console.debug("inDiv:#" + info["action"]);
                                    Transition.transition($("#" + id), $("#" + info["action"]), animation.isBack, animation.animationType);
                                } else {
                                    $("#" + id).hide();
                                    $("#" + info["action"]).show();
                                }
                            });
                            $map.append($area);
                        })
                    }
                })
            })
        },

        scale: function (point, imgWidth) {
            var width = $(window).width();
            var str = "";

            for (var i = 0; i < point.length; i++) {
                str += (point[i] * width) / imgWidth;
                if (i !== point.length - 1) {
                    str += ",";
                }
            }
            return str;
        }
    };
});