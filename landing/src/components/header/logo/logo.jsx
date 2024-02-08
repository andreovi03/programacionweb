import React from 'react';

export function Logo() {
  const imageUrl = 'https://poppyplaytime.com/cdn/shop/files/poppy-logo-tm.png?v=1688159608&width=210';
  
  return (
   
      <img id="poppylogo" src={imageUrl} alt="Poppy Playtime"/>

  );
}

export function Profile() {
    const imageUrl = 'https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png';
    
    return (
     
        <img id="profilelogo" src={imageUrl} alt="Profile"/>
  
    );
}

export function Searchicon() {
    const imageUrl = 'https://icones.pro/wp-content/uploads/2021/02/loupe-et-icone-de-recherche-de-couleur-grise.png';
    
    return (
     
        <img id="searchicon" src={imageUrl} alt="Search Icon"/>
  
    );
}

export function Shop() {
    const imageUrl = 'https://icones.pro/wp-content/uploads/2021/05/symbole-charrette-gris.png';
    
    return (
     
        <img id="shop" src={imageUrl} alt="Shop"/>
  
    );
}