import React from 'react';
import styles from './Item.module.css'
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Item = ({ value, isDone,id, onClickDone }) => (

  <div className={styles.itemWrap}>
<Checkbox
  checked={isDone}
  tabIndex ={-1}
  color="primary"
  onClick={() => onClickDone(id)}
  />
<p className={styles.itemText}>{value}</p>
<DeleteOutlineIcon className={styles.btn} />
</div>
);

export default Item;
