import React, { useState, useEffect } from 'react'
import { Button } from '../button/button'
import { images } from '../Plants/Images'

export function Body () {
  const [counter, setCounter] = useState(0)
  const [currentImageIndex, setImg] = useState(0)
  const [visible, setVisible] = useState(true)

  console.log(setVisible)

  const handleClickCounter = (value) => {
    if (value === 'add') {
      setCounter(counter + 1)
    } else if (value === 'subtract' && counter > 0) {
      setCounter(counter - 1)
      setImg(0)
    } else if (value === 'reset') {
      setCounter(0)
      setImg(0)
    }
  }

  useEffect(() => {
    if (counter >= 10 && currentImageIndex === 0) {
      setImg(1)
    } else if (counter >= 30 && currentImageIndex === 1) {
      setImg(2)
    } else if (counter >= 60 && currentImageIndex === 2) {
      setImg(3)
    } else if (counter >= 90 && currentImageIndex === 3) {
      setImg(4)
    } else if (counter >= 127 && currentImageIndex === 4) {
      setImg(5)
    }
  }, [counter, currentImageIndex])

  return (
    <>
      <h2>Add Magic Level to the Plant</h2>

      {visible && <img src={images[currentImageIndex]} alt='Counter Image' className='change' />}

      <div id='level'><h2>Level {counter}</h2></div>

      <div className='buttons'>
        <Button onClick={() => handleClickCounter('subtract')}>-</Button>
        <Button onClick={() => handleClickCounter('reset')}>Undo Magic</Button>
        <Button onClick={() => handleClickCounter('add')}>+</Button>
      </div>
    </>
  )
}
