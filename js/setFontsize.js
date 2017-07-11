
//JS监听浏览器文字大小代码
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            var clientHeight = docEl.clientHeight;
            if (!clientWidth || !clientHeight) return;
            //根据屏幕的大小设置<html>的元素
            var clientValue = Math.min(clientHeight,clientWidth);
            docEl.style.fontSize = 11 * (clientValue / 500) + 'px';
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);