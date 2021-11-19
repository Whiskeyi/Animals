// 节流throttle 处理频繁点击click事件
function throttle(fn, delay) {
    let valid = false
    return function() {
      setTimeout(() => {
        fn()
        valid = true;
      }, delay)
    }
  }