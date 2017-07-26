/**
 * -------------------------------------------------------
 * rem计算方式: 设计图尺寸px / 100 = 实际rem  例: 100px = 1rem
 * @version  1.0
 * @author   henry
 * -------------------------------------------------------
 */
+ function(window) {
    var doc = window.document;
    
    //设计文档宽度
    var designWidth = 750;
    
    function recalc() {
        //html元素
        var _html = doc.documentElement;
        //文档宽度
        var deviceWidth = doc.documentElement.clientWidth;
        
        _html.style.fontSize = deviceWidth / (designWidth / 100) + 'px';
    }
    window.addEventListener('resize', recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    
}(window);
