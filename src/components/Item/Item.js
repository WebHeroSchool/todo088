import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Item = ({ value, isDone,id, onClickDone, onClickDelete }) => (

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

Checkbox.defaultProps = {

   isDone:false

};

export default Item;
