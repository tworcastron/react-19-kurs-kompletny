import axiosAuth from '../axiosAuth'

export async function editProfileAction(prevState, formData, idToken) {
  const errors = []
  const payload = {
    email: formData.get('email'),
    returnSecureToken: true,
    idToken,
  }

  if (formData.get('password')) {
    payload.password = formData.get('password')
  }

  try {
    const res = await axiosAuth.post('/accounts:update', payload)
    window.localStorage.setItem('user', JSON.stringify(res.data))
  } catch (err) {
    errors.push(err.response.data.error.message)
  }

  return {
    success: errors.length === 0,
    errors,
    values: {
      email: formData.get('email'),
      password: ''
    }
  }
}