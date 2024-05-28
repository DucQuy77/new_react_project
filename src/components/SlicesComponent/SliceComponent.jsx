import { Image } from 'antd';
import React from 'react'
import Slider from 'react-slick';
export const SliceComponent = ({arrImages}) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
  };
  return (
    <Slider settings={settings}>
      {arrImages.map((image)=>{
        return (
          <Image src={image} alt='slider' preview={false} width='100%' height='275px' />
        )
      })}
    </Slider>
  )
}
