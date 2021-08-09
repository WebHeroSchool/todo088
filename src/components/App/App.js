import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import InputItem from '../InputItem/InputItem';

const todoItem = 'Написать новое приложение';

const App = () => {
  const items = [

    {
        value: 'Написать новое приложение',
        isDone: true
    },
    {
        value: 'прописать props',
        isDone: false
     },
    {
        value: 'сделать все дела',
        isDone: true
    }
];
return (
<div className={styles.wrap}>
  <h1 className={styles.title}> Планы на день</h1>
  <InputItem />
  <ItemList items={items}/>
  <Footer count={4} />
</div>);
}

export default App;
