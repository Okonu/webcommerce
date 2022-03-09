import React from 'react'
import './omartbusines.css'

import { images } from './Images';
export default function OmartBusiness() {
    return (
      <div className="omartBusinesses">
      <div className="business">
        <img
          className="business_image"
          src={images.delivery}
          alt="Omart kenya"
        />
        <span>We Deliver</span>
      </div>
      <div className="business">
        <img className="business_image" src={images.green} alt="Omartomart Stores" />
        <span>We are Green</span>
      </div>
      <div className="business">
        <img className="business_image" src={images.care} alt="omart Stores" />
        <span>We Care</span>
      </div>
    </div>
    )
}
