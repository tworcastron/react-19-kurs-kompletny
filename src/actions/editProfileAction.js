export async function editProfileAction(prevState, formData) {
  // połęczenie z backendem
  await new Promise(res => setTimeout(res, 1000))
  // console.log(prevState, formData.get('email'), formData.get('password'))

  return {
    success: !prevState.success,
    errors: ['Błędny email'],
    values: {
      email: formData.get('email'),
      password: formData.get('password')
    }
  }
}