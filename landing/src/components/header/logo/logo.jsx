import React from 'react';

export function Logo() {
  const imageUrl = 'https://poppyplaytime.com/cdn/shop/files/poppy-logo-tm.png?v=1688159608&width=210';
  
  return (
   
      <img id="poppylogo" src={imageUrl} alt="Poppy Playtime"/>

  );
}