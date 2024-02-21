import React from 'react'
import { Carrousel } from './carrousel/carrousel'
import { Products } from './products/products'

export function Body () {
  return (
    <main>
      <div id='body'>
        <div id='carrousel'>
          <Carrousel iconSrc='./src/assets/huggyonezie.png' />
        </div>
        <div id='productzone'>
          <Products img='src/assets/dogday1.png' desc='DogDay Plush (Pre-Order)' price='$38.00 USD' />
          <Products img='src/assets/catnap1.png' desc='CatNap Plush (Pre-Order)' price='$38.00 USD' />
          <Products img='src/assets/boxyboo1.png' desc='Boxy Boo Plush' price='$44.00 USD' />
          <Products img='src/assets/killywilly1.png' desc='Killy Willy Plush' price='$32.00 USD' />
        </div>
        <div id='productzone'>
          <Products img='src/assets/huggy1.png' desc='19" Smiling Huggy Wuggy Plush' price='$32.00 USD' />
          <Products img='src/assets/pj1.png' desc='PJ Pugapillar Plush' price='$32.00 USD' />
          <Products img='src/assets/mommy1.png' desc='Mommy Long Legs Plush' price='$44.00 USD' />
          <Products img='src/assets/daddy1.png' desc='Daddy Long Legs Plush' price='$44.00 USD' />
        </div>
        <div id='shopallbtn'>
          <button id='shopall'>SHOP ALL</button>
        </div>
        <div id='appareltxt'><h3>APPAREL</h3></div>
        <div id='apparelzone'>
          <Products img='https://poppyplaytime.com/cdn/shop/files/CatNap-Tee-Mock.jpg?v=1706040641&width=493' desc='Monster Catnap Exclusive Chapter 3 Trailer Tee' price='Form $24.00 USD' />
          <Products img='https://poppyplaytime.com/cdn/shop/files/PoppyPlaytime_Onesie_PoppyWeb_1.jpg?v=1694035104&width=493' desc='Huggy Wuggy Onesie' price='$50.00 USD' />
          <Products img='https://poppyplaytime.com/cdn/shop/files/W5N083A_HOODIE_Front.jpg?v=1706032292&width=493' desc='Monster Catnap Hoodie' price='From $40.00 USD' />
          <Products img='https://poppyplaytime.com/cdn/shop/files/CATNAP_HOODIE_Front_27bed14d-11b1-4616-a9b2-3bae74fce283.jpg?v=1700584932&width=493' desc='Catnap Sleeping Gas Hoodie' price='$45.00 USD' />
        </div>
        <div id='apparelzone'>
          <Products img='https://poppyplaytime.com/cdn/shop/files/CATNAP_TEE_1.jpg?v=1700242016&width=493' desc='Catnap Plush Sleeping Gas Tee' price='Form $24.00 USD' />
          <Products img='https://poppyplaytime.com/cdn/shop/files/CATNAP8_1.jpg?v=1706031765&width=493' desc='Monster Catnap Gas Black Tee' price='From $24.00 USD' />
          <Products img='https://poppyplaytime.com/cdn/shop/files/CATNAP7_ICEGRAY_1.jpg?v=1706031628&width=493' desc='Monster Catnap Gas Gray Tee' price='From $24.00 USD' />
          <Products img='https://poppyplaytime.com/cdn/shop/files/CATNAP6_1.jpg?v=1700241919&width=493' desc='Catnap Night Sky Tee' price='From $24.00 USD' />
        </div>
        <div id='shopallbtn'>
          <button id='shopall'>SHOP ALL</button>
        </div>
      </div>
    </main>
  )
}
