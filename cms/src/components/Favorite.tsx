import { useFetcher } from 'react-router-dom'

export default function Favorite({ product, className = '', size = 'normal' }) {
  const fetcher = useFetcher()

  const isFav = () => {
    // optimistic UI
    if (fetcher.formData) {
      return fetcher.formData.get('favorite') === 'true'
    }

    return product.favorite
  }

  const favorite = isFav()

  const sizeMap = {
    large: 'text-4xl',
    normal: 'text-xl',
    small: 'text-sm',
  }

  return (
    <fetcher.Form method="post" className={className}>
      <button
        name="favorite"
        value={favorite ? 'false' : 'true'}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        <span className={sizeMap[size]}>{favorite ? '★' : '☆'}</span>
      </button>
    </fetcher.Form>
  )
}
