import React from 'react'
import HeroSection from './HeroSection'
import LatestJobs from './LatestJobs'
import CategoryCarousel from './CategoryCarousel'


const Home = () => {
  return (
    <div>
      <HeroSection />
      <CategoryCarousel/>
      <LatestJobs/>
    </div>
  )
}

export default Home