import { useState } from "react";
import Input from "../../components/UI/Input/Input";
import { validate } from "../../lib/validators";
import Button from '../../components/UI/Button/Button'

export default function HotelForm() {
  const [form, setForm] = useState({
    title: {
      value: '',
      error: '',
      rules: ['required']
    },
    city: {
      value: '',
      error: '',
      rules: ['required']
    },
    description: {
      value: '',
      error: '',
      rules: ['required']
    },
    rooms: {
      value: '2',
      error: '',
      rules: ['required']
    },
    file: {
      value: '',
      error: '',
    },
    status: {
      value: 0,
      error: '',
      rules: ['required']
    },
    features: {
      value: ['tv'],
      error: '',
    },
  })
  const isValid = Object
    .values(form)
    .map(x => x.error)
    .filter(x => x)
    .length === 0

  const onInputChange = (field, value) => {
    const newValue = {
      ...form[field],
      value,
      error: validate(form[field].rules, value)
    }
    setForm({ ...form, [field]: newValue })
  }

  return (
    <>
      <Input 
        label="Nazwa"
        value={form.title.value}
        error={form.title.error}
        onChange={value => onInputChange('title', value)}
      />

      <Input
        label="Miejscowość"
        value={form.city.value}
        error={form.city.error}
        onChange={value => onInputChange('city', value)}
      />
      <Input
        label="Opis"
        type="textarea"
        value={form.description.value}
        error={form.description.error}
        onChange={value => onInputChange('description', value)}
      />
      <Input 
        label="Ilość pokoi"
        value={form.rooms.value}
        error={form.rooms.error}
        onChange={value => onInputChange('rooms', value)}
      />
      <Input
        label="Zdjęcie"
        type="file"
        value={form.file.value}
        error={form.file.error}
        onChange={value => onInputChange('file', value)}
      />
      <Input 
        label="Status"
        type="select"
          options={[
          { value: 1, label: 'Aktywny' },
          { value: 0, label: 'Ukryty' }
        ]}
        value={form.status.value}
        error={form.status.error}
        onChange={value => onInputChange('status', value)}
      />
      <Input
        label="Udogodnienia"
        type="checkbox"
          options={[
          { value: 'tv', label: 'tv' },
          { value: 'wifi', label: 'wifi' },
          { value: 'parking', label: 'parking' }
        ]}
        value={form.features.value}
        error={form.features.error}
        onChange={value => onInputChange('features', value)}
      />

      <div className="mt-4 text-end">
        <Button disabled={!isValid}>Zapisz</Button>
      </div>
    </>
  )
}