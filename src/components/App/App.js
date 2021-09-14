import React, {useState} from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import InputItem from '../InputItem/InputItem';


const App =() => {
  const initialState = {
    items: [
      {
          value: 'Сходить в магазин',
          isDone: true,
          id:1
      },
      {
          value: 'Прописать props',
          isDone: false,
          id: 2
       },
      {
          value: 'Сделать все дела',
          isDone: true,
          id: 3
      }
    ],
  count:3
};
const[items,setTodoitem] = useState(initialState.items);
const[count,setCount] = useState(initialState.items);


  const onClickDone = id => {
    const newItemList = items.map(item =>{
      const newItem = { ...item};

      if (item.id === id ){
        newItem.isDone = !item.isDone;
      }
    return newItem;
    });
  setTodoitem(newItemList)
  };

const onClickDelete = id => {
  const newItem = items.filter(item =>
    item.id !== id );
    setTodoitem(newItemList);
    setCount(value(count: any|*[])=>count-1)
  };

const onClickAdd = value =>(
const newTodoitem: [
  ...  newTodoitem,
  {
    value,
    isDone: false,
    id:  count + 1
  }
],

setTodoitem (newItemList);
setCount(value(count:any|*[])=>count-1)
};

  render() {
return (
<div className={styles.wrap}>
  <h1 className={styles.title}> Планы на день</h1>
  <InputItem onClickAdd={onClickAdd}/>
  <ItemList
      items={ items}
      onClickDone = {onClickDone}
      onClickDelete={ onClickDelete }/>
  <Footer count={ count} />
</div>);
}
}

export default App;
