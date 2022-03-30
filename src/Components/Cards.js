import React from 'react';
import Card from '@mui/material/Card';
import StarRateIcon from '@mui/icons-material/StarRate';


export function Cards({product}){
    return(
      <Card className="card-list">
        <div className="card-container">
          <div className='card-img-wrapper'>
          <img className="card-img" alt={product.title} src={product.imageUrl}/>
          </div>
          <div className='card-content'>
              <p className='card-title'>{product.title}</p>
              
              <div className='card-rating'>
                <p>{product.rating}</p>
                <StarRateIcon style={{marginTop: '16px',fontSize:"21px",backgroundColor:"green",color:"#fff"}}/>
              </div>
              
              <div className='card-price-offer-wrapper'>
                <p className='card-offerprice'>{product.offerPrice}</p>
                <p className='card-price'>{product.price}</p>
                <p className='product-offer'>{product.offer}</p>
              </div>
          </div>
        </div>
        </Card>
    );
}