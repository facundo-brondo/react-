import React from 'react'
import "./ItemListConteiner.css"

const ItemListConteiner = ({greeting}) => {
  return (
    <div>
        <h1 className='titulo'>{greeting}</h1>
    </div>
  )
}

export default ItemListConteiner