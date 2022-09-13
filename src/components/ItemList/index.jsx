import Item from '../Item'
import React from 'react'

const ItemList = ({data = []}) => {
  return (
    data.map(games => <Item key={games.id} info={games} />)
  );
}

export default ItemList;
