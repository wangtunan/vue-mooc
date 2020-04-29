// 函数节流
export function throttle (fn, interval = 500) {
  let first = true
  let timer = null;
  let _self = fn
  return function () {
    let that = this
    let args = arguments
    // 是否第一次执行
    if (first) {
      _self.apply(this, args)
      first = false
      return first
    }
    // 判断定时器是否执行完毕
    if (timer) {
      return false
    }
    // 甚至定时器
    timer = setTimeout(function () {
      clearTimeout(timer)
      timer = null
      _self.apply(that, args)
    }, interval)
  }
}

// 函数防抖
export function debounce (fn, delay) {
  var timer = null;
  return function () {
    var context = this;
    if(timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.call(context, ...arguments);
    }, delay || 500);
  }
}

// object merge
export function mere (target) {
  for (let index = 1, len = arguments.length; index < len; index++) {
    let source = arguments[index] || {}
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        let value = source[key]
        if (value !== 'undefined') {
          target[key] = value
        }
      }
    }
  }
  return target
}

// 获取随机主键
export function getGuid () {
  function S4 () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
 }
 return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

// 获取随机订单号
export function getOrderId () {
  const date = new Date()
  const year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  if (month < 10) {
    month = `0${month}`
  }
  if (day < 10) {
    day = `0${day}`
  }
  return `${year}${month}${day}${date.getTime()}`
}

// 获取指定范围的随机数
export function getRandomNum (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// 将秒格式化为分：秒的形式
export function normalSeconds (seconds = 0) {
  let minutes = Math.floor(seconds / 60)
  let second = seconds % 60
  if (minutes === 0) {
    minutes = '00'
  } else if (minutes > 0 && minutes < 10) {
    minutes = `0${minutes}`
  }
  if (second === 0) {
    second = '00'
  } else if (second > 0 && second < 10) {
    second = `0${second}`
  }
  return `${minutes}:${second}`
}
