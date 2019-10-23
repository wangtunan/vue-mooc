import PopupManager from 'assets/js/popup-manager.js'
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    modal: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    openModel () {
      if (this.modal) {
        const zIndex = PopupManager.nextZIndex()
        PopupManager.openModel(zIndex)
      }
      const $el = this.$el
      $el.style.zIndex = PopupManager.nextZIndex()
    },
    closeModel () {
      PopupManager.closeModel()
    }
  }
}