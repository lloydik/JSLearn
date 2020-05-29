'use strict';
$(function () {
    $(window).on("scroll resize", function() {
        $("progress").css ({
            "top": parseInt(getComputedStyle(document.querySelector('#menu')).height) + "px"
        });
        let o = $(window).scrollTop() / ($(document).height() - $(window).height());
        $(".progress-bar").css ({
            "width": (100 * o | 0) + "%"
        });
        $('progress')[0].value = o;
    })
})