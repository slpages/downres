/**
 * 2020年04月04日全国哀悼
 */

// function isIE() {
//   var userAgent = navigator.userAgent;
//   var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
//   var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
//   var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
//   return isIE || isEdge || isIE11;
// }

// /*
//  * 动态添加 CSS 样式
//  * @param selector {string} 选择器
//  * @param rules    {string} CSS样式规则
//  * @param index    {number} 插入规则的位置, 靠后的规则会覆盖靠前的
//  */
// var addCssRule = function() {
//   // 注意：IE6/7/8中使用 style.stylesheet，其它浏览器 style.sheet
//   function createStyleSheet() {
//     var head = document.head || document.getElementsByTagName('head')[0];
//     var style = document.createElement('style');
//     style.type = 'text/css';
//     head.appendChild(style);
//     return style.sheet ||style.styleSheet;
//   }

//   // 创建 stylesheet 对象
//   var sheet = createStyleSheet();

//   // 返回接口函数
//   return function(selector, rules, index) {
//     index = index || 0;
//     if (sheet.insertRule) { 
//         sheet.insertRule(selector + "{" + rules + "}", index); 
//     } else if (sheet.addRule) { 
//         sheet.addRule(selector, rules, index); 
//     }
//   }
// }();

// window.onload = function() {
//   try {
//     var beginTime = new Date('2020/04/04 00:00:00');
//     var endTime = new Date('2020/04/04 23:59:59');
//     var now = new Date();

//     if (now >= beginTime && now <= endTime) {
//       var html = document.querySelector('html');
      
//       if (html) {
//         html.style['-webkit-filter'] = 'grayscale(100%)';
//         html.style['-moz-filter'] = 'grayscale(100%)';
//         html.style['-ms-filter'] = 'grayscale(100%)';
//         html.style['-o-filter'] = 'grayscale(100%)';
//         html.style['filter'] = 'grayscale(100%)';
//       }

//       if (isIE()) {
//         addCssRule('html', 'filter:gray;');
//         addCssRule('*', 'filter:gray;color:gray !important;');
//         addCssRule('body', 'background-color:#ddd;opacity:0.5;filter:Alpha(opacity=50);');
//       }
//     }
//   } catch(err) {
//   }
// }