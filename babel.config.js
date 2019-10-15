module.exports = {
  "presets": [
    '@vue/app',
    [
      "@babel/env",
      {
        "targets": 2,
        "useBuiltIns": "usage"
      }
    ]
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
