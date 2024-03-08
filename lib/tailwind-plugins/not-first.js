function notFirst({ addVariant, e }) {
  addVariant('not-first', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`not-first${separator}${className}`)}:not(:first-child)`
    })
  })
}

module.exports = notFirst