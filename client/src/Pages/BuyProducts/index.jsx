import React, { useEffect, useState } from 'react'
import BuyCart from '../../Components/BuyProducts/BuyCart/BuyCart'
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
        loading?
        <Loading/>:
        <BuyCart/>
      }
    </div>
  )
}

export default Index