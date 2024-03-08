const nextSibling = ({ addVariant, e }) => {
  addVariant('next-sibling', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`next-sibling${separator}${className}`)} + *`
    })
  })
}

module.exports = nextSibling