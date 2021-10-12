// 用来做动画优化

var el = document.getElementById('element');

// 当鼠标移动到该元素上时给该元素设置 will-change 属性
el.addEventListener('mouseenter', hintBrowser);
// 当 CSS 动画结束后清除 will-change 属性
el.addEventListener('animationEnd', removeHint);

function hintBrowser() {
    // 填写上那些你知道的，会在 CSS 动画中发生改变的 CSS 属性名们
    this.style.willChange = 'transform, opacity';
}

function removeHint() {
    this.style.willChange = 'auto';
}
