// 防抖(debounce): 所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。

function debounce(func,delay) {
    let timer;
    return function() {
        let context = this;
        if(timer) clearTimeout(timer) // 每次执行的时候把前一个 setTimeout clear 掉
        timer = setTimeout(()=> {
            func.apply(context,arguments)
        },delay)
    }
}

// 防抖的应用场景
// 限制 鼠标连击 触发
// 每次 resize/scroll 触发统计事件
// 文本输入的验证（连续输入文字后发送 AJAX 请求进行验证，验证一次就好）
d





// 节流(throttle): 所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。

function throttle(func, wait) {
    // 定时器版
    let timer;
    return function () {
        let context = this;
        if (!timer) {
            timer = setTimeout(() => {
                timer = null;
                func.apply(context, arguments)
            }, wait)
        }
    }
}

// 节流的应用场景
// 射击游戏的 mousedown/keydown 事件（单位时间只能发射一颗子弹）
// 搜索联想（keyup）
// 监听滚动事件判断是否到页面底部自动加载更多：给 scroll 加了 debounce 后，只有用户停止滚动后，才会判断是否到了页面底部；如果是 throttle 的话，只要页面滚动就会间隔一段时间判断一次
