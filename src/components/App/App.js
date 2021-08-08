import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';

const todoItem = 'Написать новое приложение';

const App = () => (<div>
  <h1> Планы на день</h1>
  <InputItem />

 <ItemList />

 <Footer />
</div>);



export default App;
