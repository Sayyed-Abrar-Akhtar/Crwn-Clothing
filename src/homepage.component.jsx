import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    {['HATS', 'JACKETS', 'SNEAKERS', 'WOMENS', 'MENS'].map((item, idx) => (
      <div className='directory-menu' key={idx}>
        <div className='menu'>
          <div className='content'>
            <h1 className='title'> {item}</h1>
            <span className='subtitle'>Shop Now</span>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default HomePage;
