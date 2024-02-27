import React, { useState, useEffect } from 'react'
import { Button } from '../Button/Button'
import { images } from '../Plants/Images'

export function Body () {
  const [counter, setCounter] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  console.log(setVisible)

  const handleClickCounter = (value) => {
    if (value === 'add') {
      setCounter(counter + 1)
    } else if (value === 'subtract' && counter > 0) {
      setCounter(counter - 1)
      setCurrentImageIndex(0)
    } else if (value === 'reset') {
      setCounter(0)
      setCurrentImageIndex(0)
    }
  }

  useEffect(() => {
    if (counter >= 10 && currentImageIndex === 0) {
      setCurrentImageIndex(1)
    } else if (counter >= 30 && currentImageIndex === 1) {
      setCurrentImageIndex(2)
    } else if (counter >= 60 && currentImageIndex === 2) {
      setCurrentImageIndex(3)
    } else if (counter >= 90 && currentImageIndex === 3) {
      setCurrentImageIndex(4)
    } else if (counter >= 127 && currentImageIndex === 4) {
      setCurrentImageIndex(5)
    }
  }, [counter, currentImageIndex])

  return (
    <>

      <h2>Add Level to the Plant</h2>

      {visible && <img src={images[currentImageIndex]} alt='Counter Image' className='image-transition' />}
      <div className='container'>
        <Button onClick={() => handleClickCounter('subtract')}>-</Button>

        <Button onClick={() => handleClickCounter('add')}>+</Button>

      </div>
      <h2>{counter}</h2>
      <Button onClick={() => handleClickCounter('reset')}>Reset</Button>

    </>
  )
}
