import Item from '../Item'
import React from 'react'

const ItemList = ({data = []}) => {
  return (
    data.nap(games => <Item key={games.id} info={games} />)
  );
}

export default ItemList;
