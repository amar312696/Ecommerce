import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import {mainCarouselComponent} from './MainCarouselData'
import 'react-alice-carousel/lib/alice-carousel.css';

export default function MainCarousel() {
    const items=mainCarouselComponent.map((item)=> <img className='cursor-pointer' 
        role='preseentaion' src={item.image} />)
    const i=mainCarouselComponent.map((item)=> console.log(item.image))
    return (
        <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2500}
        infinite
    />
    )
  }
