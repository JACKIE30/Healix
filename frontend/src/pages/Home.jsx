import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import RelatedDoctors from '../components/RelatedDoctors'


const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      {/* <RelatedDoctors /> */}
      <TopDoctors />
      <Banner />
    </div>
  )
}

export default Home