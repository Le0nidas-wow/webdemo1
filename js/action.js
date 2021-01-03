$(document).ready(function() {
    $("#flip").click(function() {
        $("#panel").slideToggle("slow");
    });
});
var isinter;
var millisec = 30; //定时器间隔执行时间/毫秒
var xfloat = 0; //漂浮层x坐标
var yfloat = 0; //漂浮层y坐标
var yistop = false;
var xisleft = true;

function floatanimation() {
    var visiblewidth = $(window).width(); //可视区域宽度
    var visibleheight = $(window).height(); //可视区域高度

    var divwidth = $('#floatdiv').width(); //div漂浮层宽度
    var divheight = $('#floatdiv').height(); //div漂浮层高度

    var hstop = jQuery(window).scrollTop(); //滚动条距离顶部的高度
    var wsleft = jQuery(window).scrollLeft(); //滚动条距离最左边的距离

    var offwidth = (visiblewidth - divwidth); //div偏移的宽度
    var offheight = (visibleheight - divheight); //div偏移的高度

    if (!yistop) {
        yfloat++;
        if (yfloat >= offheight) {
            yistop = true;
        }
    } else {
        yfloat--;
        if (yfloat <= 0) {
            yistop = false;
        }
    }

    if (xisleft) {
        xfloat++;
        if (xfloat >= offwidth) {
            xisleft = false;
        }
    } else {
        xfloat--;
        if (xfloat <= 0) {
            xisleft = true;
        }
    }
    /* 如果使用固定定位，请把加上滚动条的距离去掉即可 */
    $('#floatdiv').css({
        'top': yfloat,
        'left': xfloat + wsleft
    });
}

$(function() {
    isinter = setInterval("floatanimation()", millisec);
    $('#floatdiv').mouseover(function() {
        clearInterval(isinter);
    }).mouseout(function() {
        isinter = setInterval("floatanimation()", millisec);
    });
    $('#Clickclose').click(function() {
        $(this).parents("#floatdiv").slideUp(500, function() {
            clearInterval(isinter);
            $(this).remove();
        });
    });
});