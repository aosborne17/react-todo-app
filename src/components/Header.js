import React, { useEffect } from 'react';
import './Header.css';

const Header = () => {
  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then((res) => res.json())
      .then((data) => console.log(data));
    // return () => {
    //   cleanup;
    // };
  }, []);
  return (
    <div className='header'>
      <div className='header__title'>
        <h2 className='header__quote'>
          <span>To live my the sword is to die by the sword - Napolean </span>
        </h2>
      </div>
    </div>
  );
};

export default Header;
