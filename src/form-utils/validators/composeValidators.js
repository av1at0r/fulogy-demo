const composeValidators = (...validators) => {
  return (value, allValues) => {
    debugger
    for (let i = 0; i < validators.length; i++) {
      const message = validators[i](value, allValues)
      if (typeof message !== 'undefined') {
        console.log(`message ${message}`)
        return message;
      }
    }
  }
}
export default composeValidators