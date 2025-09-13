import Input from "../../components/UI/Input/Input";

export default function HotelForm() {
  return (
    <>
      <Input label="Nazwa" error="coś nie tak" />
      <Input label="Miejscowość"  />
      <Input label="Opis" type="textarea" />
      <Input label="Zdjęcie" type="file" />
      <Input label="Status" type="select" options={[
        { value: 1, label: 'Aktywny' },
        { value: 0, label: 'Ukryty' }
      ]} />
      <Input label="Udogodnienia" type="checkbox" options={[
        { value: 'parking', label: 'tv' },
        { value: 'parking', label: 'wifi' },
        { value: 'parking', label: 'parking' }
      ]} />
    </>
  )
}