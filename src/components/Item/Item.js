import React from 'react';
import styles from './Item.module.css'
import classnames from 'classnames';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Item = ({ value, isDone }) => (

  <div className={styles.itemWrap}>
  <input type='checkbox'/>
  <div className={
  classnames({
    [styles.item]: true,
    [styles.done]: isDone
  })
}>
<p className={styles.itemText}>{value}</p>
</div>
<DeleteOutlineIcon className={styles.btn} />
</div>
);

export default Item;
