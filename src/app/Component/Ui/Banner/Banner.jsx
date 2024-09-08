import React from 'react'
import Image from 'next/image';
import banner_img from "@/../public/Images/banner.jpg"

const Banner = () => {
  return (
    <div>
        <Image height ={1080} width = {2500}  src={banner_img} alt="img"/>
    </div>
  )
}

export default Banner