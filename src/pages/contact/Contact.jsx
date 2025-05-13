import React, { useEffect } from 'react'
import ContactUs from '../../components/contactComponent/ContactUs'

const Contact = () => {
  useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <div className='pt-[78px]'><ContactUs/></div>
  )
}

export default Contact