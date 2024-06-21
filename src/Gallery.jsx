import { useQuery } from '@tanstack/react-query'
import { useGlobalContext } from './context'
import axios from 'axios'

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`

const Gallery = () => {
  const { searchTerm } = useGlobalContext()
  const response = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`)

      return result.data
    },
  })
  if (response.isLoading) {
    return (
      <section className='image-container'>
        <h4>Loading...</h4>
      </section>
    )
  }
  if (response.isError) {
    return (
      <section className='image-container'>
        <h4>There was a error...</h4>
      </section>
    )
  }
  const results = response.data.results
  if (results.length < 1) {
    return (
      <section className='image-container'>
        <h4>No result found...</h4>
      </section>
    )
  }
  return (
    <section className='image-container'>
      {results.map((image) => {
        return (
          <img
            src={image?.urls?.raw}
            alt={image.alt_description}
            key={image.id}
            className='img'
          />
        )
      })}
    </section>
  )
}

export default Gallery
