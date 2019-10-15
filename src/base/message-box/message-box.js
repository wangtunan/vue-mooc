import Vue from 'vue'
import msgbox from './message-box.vue'

let msgQueue = []
let currentMsgBox, instance
const msgboxTypes = ['alert', 'confirm']
const msgboxConstructor = Vue.extend(msgbox)
const defaultOptions = {
  title: '',
  message: '',
  type: '',
  confirmButtonText: '确定',
  cancelButtonText: '取消',
  showCancelButton: false,
  showConfirmButton: true
}
const mergeOption = {
  alert: {
    showCancelButton: false,
    showConfirmButton: true
  },
  confirm: {
    showCancelButton: true,
    showConfirmButton: true
  }
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
    showNextMsg()
  }
}

const showNextMsg = function () {
  if (!instance) {
    initInstance()
  }
  if (instance.visible || msgQueue.length === 0) {
    return
  }
  currentMsgBox = msgQueue.shift()
  let options = currentMsgBox.options
  for (const key in options) {
    if (options.hasOwnProperty(key)) {
      instance[key] = options[key]
    }
  }
  document.body.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.visible = true
  })
}

const initInstance = function () {
  instance = new msgboxConstructor({
    el: document.createElement('div')
  })
}

msgboxTypes.forEach($type => {
  MessageBox[$type] = (message, title, options) => {
    if (typeof title === 'object') {
      options = title
      title = ''
    } else if (!title) {
      title = ''
    }
    return MessageBox(Object.assign({
      $type: $type,
      title: title,
      message: message
    }, mergeOption[$type], options))
  }
})

// close
MessageBox.close  = () => {
  instance.messageBoxClose()
  instance = null
  msgQueue = []
}

export default MessageBox
export { MessageBox }