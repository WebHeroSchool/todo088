import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import PropTypes from 'prop-types';

class Item extends React.Component{componentDidMount(){
  this.timerID = setInterval(() => console.log('у нас вор!'), 1000);
}

componentWillUnmount(){
clearInterval(this.timerID);
}
render(){
  const { value, isDone, id, onClickDone, onClickDelete} = this.props;
return (

  <div className={styles.itemWrap}>
<Checkbox
  checked={isDone}
  tabIndex ={-1}
  color="primary"
  onClick={() => onClickDone(id)}
  />
  <div className={
           classnames({
             [styles.item]: true,
             [styles.done]: isDone})
       }> {value}</div>
<DeleteOutlineIcon className={styles.btn} onClick={() => onClickDelete(id)} />
</div>
);
}}

Item.defaultProps = {
    items: [{
        isDone: false,
          }]
      };

Item.propTypes = {
    items: [{
    value:PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    onClickDone: PropTypes.func.isRequired,
    onClickAdd: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired
}]
};



export default Item;
