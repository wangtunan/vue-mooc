import Vue from 'vue'
import MessageVue from './message.vue'
let messageConstructor = Vue.extend(MessageVue)
let seed = 1
let zIndex = 2000
let instance = undefined
let instances = []
let types = ['success', 'warning', 'error', 'info']

const OFFSET = 20
const MESSAGE_OFFSET = 16

const Message = function (options = {}) {
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  let verticalOffset = options.offset || OFFSET
  let id = `message${seed++}`
  options.onClose = function () {
    Message.close(id)
  }
  instance = new messageConstructor({
    data: options
  })
  instance.id = id
  instance.$mount()
  document.body.appendChild(instance.$el)
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + MESSAGE_OFFSET
  })
  instance.verticalOffset = verticalOffset
  instance.visible = true
  instance.$el.style.zIndex = zIndex++
  instances.push(instance)
  return instances
}

types.forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return Message(options)
  }
})

Message.close = function (id) {
  let len = instances.length
  let findIndex = instances.findIndex(item => item.id === id)
  if (findIndex !== -1) {
    instances.splice(findIndex, 1)
  }
  if (len <= 1 || findIndex === -1) {
    return
  }
  let removeOffsetHeight = instances[findIndex].$el.offsetHeight
  for (let index = findIndex; index < len - 1; index++) {
    let dom = instances[index].$el
    dom.style.top = parseInt(dom.style.top, 10) - removeOffsetHeight - MESSAGE_OFFSET + 'px'
  }
}

Message.closeAll = function () {
  for (let index = instances.length - 1; index >= 0; index--) {
    instances[index].close()
  }
}

export default Message