import React, { useEffect, useState } from 'react'
import ContactImage from '../../Components/Contact/ContactImage/ContactImage'
import ContactInputs from '../../Components/Contact/ContactInputs/ContactInputs'
import ContactMap from '../../Components/Contact/ContactMap/ContactMap'
import Loading from '../../Components/Loading/Loading'

function Index() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    window.scrollTo({top:0})
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
            <ContactImage />
            <ContactInputs />
            <ContactMap />
          </div>
      }

    </div>
  )
}

export default Index