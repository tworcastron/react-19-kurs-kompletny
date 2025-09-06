export const initHotels = [
  {
    id: 1,
    name: 'Pod akacjami',
    city: 'Warszawa',
    rating: '8.5',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus porro illum veritatis molestiae nemo tenetur veniam.',
    image: 'https://picsum.photos/id/237/300/200',
  },
  {
    id: 2,
    name: 'Dębowy',
    city: 'Lublin',
    rating: '8.3',
    description: 'Soluta impedit placeat fuga saepe ex beatae alias maxime nobis explicabo praesentium voluptates. Dignissimos.',
    image: 'https://picsum.photos/id/238/300/200',
  }
]

export const reducer = (state, action) => {
  switch (action.type) {
    case 'change-color':
      return {
        ...state,
        color: state.color === 'primary' ? 'danger' : 'primary',
      }
    case 'set-loading':
      return {
        ...state,
        loading: action.isLoading,
      }
    case 'login':
      return {
        ...state,
        user: true,
      }
    case 'logout': 
      return {
        ...state,
        user: false,
      }
    case 'set-hotels':
      return {
        ...state,
        hotels: action.hotels,
      }
    case 'set-visible-hotels':
      return {
        ...state,
        visibleHotels: action.hotels,
      }
    default:
      throw new Error(`Nie ma takiej akcji ${action.type}`)
  }
}
export const initState = {
  color: 'primary',
  loading: true,
  user: null,
  hotels: [],
  visibleHotels: [],
}