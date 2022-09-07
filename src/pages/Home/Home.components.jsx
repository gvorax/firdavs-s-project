import React from 'react'
import Article from '../../components/Article/Article.components'
import Newsbanner from '../../components/news-banner/News-banner.components'

const Home = () => {
  return (
    <div>
      <Newsbanner />
      <Article />
    </div>
  )
}

export default Home