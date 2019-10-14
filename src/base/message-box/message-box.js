import Vue from 'vue'
import msgbox from './message-box.vue'
// import { merge } from 'utils/utils.js'

let msgQueue = []
let instance = null
const msgboxConstructor = Vue.extend(msgbox)
const defaultOptions = {
  title: '',
  message: '',
  type: '',
  confirmButtonText: '',
  cancelButtonText: ''
}

const MessageBox  = function (options, callback) {
  if (Vue.prototype.$isServer) {
    return
  }
  if (typeof options === 'string') {
    options = {
      message: options
    }
    if (typeof arguments[1] === 'string') {
      options.title = arguments[1]
    }
  } else if (options.callback && !callback) {
    callback = options.callback
  }

  // 是否支持Promise
  if (typeof Promise !== 'undefined') {
    return new Promise((resolve, reject) => {
      msgQueue.push({
        options: Object.assign({}, defaultOptions, options),
        callback: callback,
        resolve: resolve,
        reject: reject
      })
      showNextMsg()
    })
  } else {
    msgQueue.push({
      options: Object.assign({}, defaultOptions, options),
      callback: callback
    })
  }
  showNextMsg()
}

const showNextMsg = function () {
  if (!instance) {
    initInstance()
  }
}

const initInstance = function () {
  instance = new msgboxConstructor({
    el: document.createElement('div')
  })
}

// alert
MessageBox.alert = function (message, title, options) {
  
}

// confirm
MessageBox.confirm = function (message, title, options) {

}

// close
MessageBox.close  = () => {

}

export default MessageBox
export { MessageBox }