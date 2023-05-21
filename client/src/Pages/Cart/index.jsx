import React, { useEffect, useState } from 'react'
import CartHeader from '../../Components/Cart/CartHeader/CartHeader'
import CartProducts from '../../Components/Cart/CartProducts/CartProducts'
import Loading from '../../Components/Loading/Loading'

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
            <CartHeader />
            <CartProducts />
          </div>
      }

    </div>
  )
}

export default Index