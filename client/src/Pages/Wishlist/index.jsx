import React, { useEffect, useState } from 'react'
import Loading from '../../Components/Loading/Loading'
import WishlistHeader from '../../Components/Wishlist/WishlistHeader/WishlistHeader'
import WishlistProducts from '../../Components/Wishlist/WishlistProducts/WishlistProducts'

function Index() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    window.scrollTo({ top: 0 })
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])
  return (
    <div>
      {
        loading ?
          <Loading /> :
          <div>
            <WishlistHeader />
            <WishlistProducts />
          </div>
      }
    </div>
  )
}

export default Index