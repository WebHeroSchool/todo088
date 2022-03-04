import React from 'react';
import styles from './Todo.module.css';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import PropTypes from 'prop-types';

class Todo extends React.Component {
    state = {
  items: [
    {
        value: 'Сходить в магазин',
        isDone: false,
        id:1
    },
    {
        value: 'Прописать props',
        isDone: false,
        id: 2
     },
    {
        value: 'Сделать все дела',
        isDone: false,
        id: 3
    }
  ],
count:3
};



onClickDone = id => {
  const newItemList = this.state.items.map(item =>{
    const newItem = { ...item};
    if (item.id === id ){
      newItem.isDone = !item.isDone;
    }
  return newItem;
  });
this.setState({ items: newItemList});
};

onClickDelete = id => {
   const newItemList =
   this.state.items.filter(item => item.id !== id );
this.setState({ items: newItemList });
};

onClickAdd = value =>
  this.setState(state => ({
      items: [
        ...state.items,
        {
          value,
          isDone: false,
          id: state.count + 1
        }
      ],
      count: state.count + 1
    }))
render() {
const activeTasks = this.state.items.filter (item => !item.isDone === false);


return (
<div className={styles.wrap}>
<h1 className={styles.title}> Планы на день</h1>
<InputItem onClickAdd={this.onClickAdd}/>
<ItemList
    items={ this.state.items}
    onClickDone = {this.onClickDone}
    onClickDelete={ this.onClickDelete }/>
<Footer count={activeTasks.length} />
</div>);
}
}

export default Todo;
