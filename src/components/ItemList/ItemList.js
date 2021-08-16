import React from 'react';
import Item from '../Item/Item';
import Button from '@material-ui/core/Button';

const ItemList = ({ items }) => (

  <div>
     {items.map(item =><div key={item.value}>
       <Item value={item.value} isDone={item.isDone}/>
       </div>)}
      <DisableElevation/>
</div>);

function DisableElevation() {
  return (
    <Button variant="contained" disableElevation>
      Удалить все
    </Button>
  )
};
export default ItemList;
