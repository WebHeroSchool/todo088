import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const todoItem = 'Написать новое приложение';

const App = () => (
<div>
  <h1> Планы на день</h1>
  <ItemList todoItem={todoItem}/>
  <Footer count={4} />;
</div>);


export default App;
