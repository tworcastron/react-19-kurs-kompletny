export const validatePassword = (text) => {
  return text.length >= 4
}

export const validateEmail = (text) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(text)
}