import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';

import styles from './App.module.css';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';



class App extends React.Component{
  render() {
  return (
  <Router>
    <div className={styles.wrap}>
      <Card className={styles.sidebar}>
        <MenuList>
          <Link to='/' className={styles.Link}><MenuItem>Обо мне</MenuItem></Link>
          <Link to='/Todo' className={styles.Link}><MenuItem>Дела</MenuItem></Link>
          <Link to='/contacts' className={styles.Link}><MenuItem>Контакты</MenuItem></Link>
        </MenuList>
        </Card>

<Routes className={styles.content}>
      <Route path='/' exact componen={<About/>} />
      <Route path='/todo' component={<Todo/>} />
      <Route path='/contacts' componen={<Contacts/>} />
  </Routes>
  </div>
  </Router>
);
}
};
export default App;
