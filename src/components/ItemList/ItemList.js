import React from 'react';
import Item from '../Item/Item';
import Button from '@material-ui/core/Button';

const ItemList = ({ items, onClickDone, onClickDelete }) => (
  <div>
     {items.map(item =><div key={item.id}>
       <Item value={item.value}
       isDone={item.isDone}
       id = {item.id}
       onClickDone ={onClickDone}
       onClickDelete = {onClickDelete}
       />
       </div>)}

  <DisableElevation />
</div>);

function DisableElevation() {
  return (
    <Button variant="contained" disableElevation>
      Удалить все
    </Button>
  )
};
export default ItemList;
