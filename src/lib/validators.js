export const validatePassword = (text) => {
  return text.length >= 4
}

export const validateEmail = (text) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(text)
}

const validateRequired = (text) => text.length > 0

const listOfRules = {
  required: (value) => validateRequired(value) ? '' : 'Pole wymagane',
  email: (value) => validateEmail(value) ? '' : 'Niepoprawny email',
}

export const validate = (rules, value) => {
  if (!rules) return ''

  for (const ruleName of rules) {
    const result = listOfRules[ruleName](value)

    if (result) return result
  }
}