import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import InputItem from '../InputItem/InputItem';


const App =() => {
  const initialState = {
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
const[items,setTodoitem] = useState(initialState.items);
useEffect(() => {
  console.log('mount');
}, []);
useEffect(() => console.log('useEffect'));


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
  const newItemList = items.filter(item =>
    item.id !== id );
    setTodoitem(newItemList);
  };

const onClickAdd = value =>{
    const newItemList= [
			...items,
          { value,
    isDone: false,
    id:  items.length + 1
  }
];
    setTodoitem (newItemList);
  }

  const activeTasks = items.filter(item => !item.isDone)


return (
<div className={styles.wrap}>
  <h1 className={styles.title}> Планы на день</h1>
  <InputItem onClickAdd={onClickAdd}/>
  <ItemList
      items={ items}
      onClickDone = {onClickDone}
      onClickDelete={ onClickDelete }/>
  <Footer count={ activeTasks.length} />
</div>);
}


export default App;
