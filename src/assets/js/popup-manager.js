import Vue from 'vue'
let zIndex
let modalList = []
const PopupManager = {
  openModal (zIndex) {
    if (Vue.prototype.$isServer) {
      return
    }
    const modal = PopupManager.getModal()
    modal.style.zIndex = zIndex
    modal.classList.add('mooc-modal')
    document.body.appendChild(modal)
    modalList.push(modal)
  },
  closeModal () {
    if (modalList.length === 0) {
      return
    }
    modalList.forEach((modal) => {
      document.body.removeChild(modal)
    })
    modalList = []
    
  },
  getModal () {
    const modal = document.createElement('div')
    return modal

  },
  nextZIndex () {
    return PopupManager.zIndex++
  }
}
Object.defineProperty(PopupManager, 'zIndex', {
  configurable: true,
  get () {
    zIndex = zIndex || 2000
    return zIndex
  },
  set (val) {
    zIndex = val
  }
})

export default PopupManager