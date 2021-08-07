import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import './App.css';

const todoItem = 'Написать новое приложение';

const App = () => {
  const items = [

    {
        value: 'Написать новое приложение'
    },
    {
        value: 'прописать props'
     },
    {
        value: 'сделать все дела'
    }
];
return (
<div className="wrap">
  <h1 className="wrap_title"> Планы на день</h1>
  <ItemList items={items}/>
  <Footer count={4} />
</div>);
}

export default App;
