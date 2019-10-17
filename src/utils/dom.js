// css autoprefixer
export function autoprefixer (style) {
  if (typeof style !== 'object') {
    return style
  }
  const rules = ['transform', 'transition', 'animation']
  const prefixes = ['ms', 'webkit']
  rules.forEach(rule => {
    const value = style[rule]
    if (value) {
      prefixes.forEach(prefix => {
        style[`${prefix}-${rule}`] = value
      })
    }
  })
  return style
}