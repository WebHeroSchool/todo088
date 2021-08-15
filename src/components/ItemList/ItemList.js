import React from 'react';
import Item from '../Item/Item';
import DisableElevation from '../DeleteButton/Delete';

const ItemList = ({ items }) => (

  <div>
     {items.map(item =><div key={item.value}>
       <Item value={item.value} isDone={item.isDone}/>
       </div>)}
       <DisableElevation />
</div>);

export default ItemList;
