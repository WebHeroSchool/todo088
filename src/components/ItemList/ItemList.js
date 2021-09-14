import React from 'react';
import Item from '../Item/Item';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

class ItemList extends React.Component{

componentDidMount(){
  console.log('componentDidMount');
}
componentDidUpdate(){
  console.log('componentDidUpdate');
}
componentWillUnmount(){
  console.log('componentWillUnmount');
}
render(){
const { items, onClickDone, onClickDelete } =props;
return (  <div>
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
ItemList.defaultProps = {
    items: [{
        value: 'Кажется тут ошибочка',
        isDone: false,
          }]
      };

ItemList.propTypes = {
          items: PropTypes.array.isRequired,
          onClickDone: PropTypes.func.isRequired,
          onClickDelete: PropTypes.func.isRequired
      };
    }};

export default ItemList;
