function notLast({ addVariant, e }) {
  addVariant('not-last', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`not-last${separator}${className}`)}:not(:last-child)`
    })
  })
}

module.exports = notLast