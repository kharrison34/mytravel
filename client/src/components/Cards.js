import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out my travels</h1>
      <p>
        I don't have much social media so I thought it would be fun to make my
        own space to share.
      </p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='This is album is filled with fun lesser known London locations'
              label='2019'
              path='/england'
            />
            <CardItem
              src='images/img-2.jpg'
              text='this album will become france'
              label='Fance 2017'
              path='/france'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Pictures from inside the walls of this great ancient city'
              label='Dubrovnik interior'
              path='/croatia'
            />
            <CardItem
              src='images/img-8.jpg'
              text='This album is just me and my friends drinking in London.'
              label='Social'
              path='/england'
            />
            <CardItem
              src='images/img-4.jpg'
              text='this album will become amsterdam'
              label='Amsterdam 2017'
              path='/amsterdam'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
