import { useState } from 'react'
import { Button } from '../button/button'

export function Body () {
  const [counter, setCounter] = useState(0)

  const handleClickCounter = (valor) => {
    if (valor === 'add') {
      setCounter(counter + 1)
    } else if (counter !== 0 && valor === 'subtract') {
      setCounter(counter - 1)
    } else if (valor === 'reset') {
      setCounter(0)
    }
  }
  return (
    <>
      <section className='add-subtract'>
        <Button
          id
          type='subtract'
          text='-'
          handleClickCounter={handleClickCounter}
        />
        <h1>Level {counter} </h1>
        <Button
          type='add'
          text='+'
          handleClickCounter={handleClickCounter}
        />
      </section>

      <Button
        type='reset'
        text='reset'
        handleClickCounter={handleClickCounter}
      />
    </>

  )
}