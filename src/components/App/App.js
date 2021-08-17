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
        isDone: true
    },
    {
        value: 'Прописать props',
        isDone: false
     },
    {
        value: 'Сделать все дела',
        isDone: true
    }
]
};
onClickDone = isDone => console.log(isDone);
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
