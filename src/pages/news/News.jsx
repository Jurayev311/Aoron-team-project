import React, { useEffect } from 'react'
import LatestNews from '../../components/newsComponent/LatestNews'

const News = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='pt-[78px]'><LatestNews/></div>
  )
}

export default News