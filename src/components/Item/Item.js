import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import PropTypes from 'prop-types';

class Item extends React.Component{

componentDidMount(){
  console.log('componentDidMount');
}
componentDidUpdate(){
  console.log('componentDidUpdate');
}
componentWillUnmount(){
  console.log('componentWillUnmount');
}
render(){

const { value, isDone, id, onClickDone, onClickDelete } = this.props;
return (

  <div className={styles.itemWrap}>
<Checkbox
  checked={isDone}
  tabIndex ={-1}
  color="primary"
  onClick={() => onClickDone(id)}
  />
  <div className={
           classnames({[styles.done]: isDone})
       }> {value}</div>

<DeleteOutlineIcon className={styles.btn} onClick={() => onClickDelete(id)} />
</div>
);

Item.defaultProps = {
   isDone:false
};

Item.propTypes = {
    isDone: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
};
}};
export default Item;
