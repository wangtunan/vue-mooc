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
    },
    closeOnEsc: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    if (!this.$isServer) {
      window.addEventListener('keydown', this.listenKeydown)
    }
  },
  methods: {
    openModal () {
      if (this.modal) {
        const zIndex = PopupManager.nextZIndex()
        PopupManager.openModal(zIndex)
      }
      const $el = this.$el
      $el.style.zIndex = PopupManager.nextZIndex()
    },
    closeModal () {
      PopupManager.closeModal()
    },
    listenKeydown (event) {
      if (!this.closeOnEsc) {
        return
      }
      if (event.keyCode === 27) {
        this.handleCloseClick && this.handleCloseClick()
      }
    }
  }
}