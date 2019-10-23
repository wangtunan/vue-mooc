import Vue from 'vue'
let zIndex
let modelList = []
const PopupManager = {
  openModel (zIndex) {
    if (Vue.prototype.$isServer) {
      return
    }
    const model = PopupManager.getModel()
    model.style.zIndex = zIndex
    model.classList.add('mooc-model')
    document.body.appendChild(model)
    modelList.push(model)
  },
  closeModel () {
    if (modelList.length === 0) {
      return
    }
    modelList.forEach((model) => {
      document.body.removeChild(model)
    })
    modelList = []
    
  },
  getModel () {
    const model = document.createElement('div')
    return model

  },
  nextZIndex () {
    return PopupManager.zIndex++
  }
}
Object.defineProperty(PopupManager, 'zIndex', {
  configurable: true,
  get () {
    zIndex = zIndex || 2000
    console.log(zIndex)
    return zIndex
  },
  set (val) {
    zIndex = val
    console.log(zIndex)
  }
})

export default PopupManager