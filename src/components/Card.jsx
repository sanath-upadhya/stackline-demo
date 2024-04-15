import React from 'react'
import './Card.css'

function Card({cardData}) {
  return (
    <div className='card-col col-xxl-12 col-md-12'>
    <div className='card info-card sales-card'>
        <div className='d-flex align-items-center'>
            <div className='card-icon d-flex align-items-center justify-content-center'>
                <img src={cardData.image} />
            </div>
        </div>
        <div className='card-body'>
            <h4 className='card-title'>
                {cardData.title}
            </h4>
        </div>
        <div className='subtitle'>
            <h6>
                {cardData.subtitle}
            </h6>
        </div>
        <ul className='tags'>
            {
                cardData.tags && cardData.tags > 0 &&
                cardData.tags.map(indData => <li>{indData}</li>)
            }
             
            <li>{cardData.tags[0]}</li>
            <li>{cardData.tags[1]}</li>
            <li>{cardData.tags[2]}</li>
            <li>{cardData.tags[3]}</li>
        </ul>
    </div>
    </div>
  )
}

export default Card