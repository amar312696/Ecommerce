import React from 'react'
import MainCarousel from '../HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../HomeSectionCarousel/HomeSectionCarousel'
import { mensKutra } from '../Data/mens_kurta'


export default function HomePage() {
  return (
    <div>
      <div>
        <MainCarousel/>
      </div>
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel data={mensKutra} sectionName={"Men's Kurta"}/>
        <HomeSectionCarousel data={mensKutra} sectionName={"Men's Shoes"}/>
        <HomeSectionCarousel data={mensKutra} sectionName={"Men's Shirt"}/>
        <HomeSectionCarousel data={mensKutra} sectionName={"Women's Sarees"}/>
        <HomeSectionCarousel data={mensKutra} sectionName={"Women's dress"}/>
        
      </div>
    </div>
  )
}
