import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

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
<div>
  <h1> Планы на день</h1>
  <ItemList items={items}/>
  <Footer count={4} />
</div>);
}

export default App;
