import React, {Component} from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import InputItem from '../InputItem/InputItem';


class App extends Component {
  state = {
    items: [

      {
          value: 'Написать новое приложение',
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
  count:7
  };

  onClickDone = id => {
    const newItemList =this.state.items.map(item =>{
      const newItem = { ...item};

      if (item.id === id ){
        newItem.isDone = !item.isDone;
      }
    return newItem;
    });
  this.setState ({ item: newItemList});
  };

  render() {
return (
<div className={styles.wrap}>
  <h1 className={styles.title}> Планы на день</h1>
  <InputItem />
  <ItemList items={this.state.items}/>
  <Footer count={4} />
</div>);
}
}

export default App;
