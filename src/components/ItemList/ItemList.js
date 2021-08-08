import React from 'react';
import Item from '../Item/Item';

const ItemList = ({todoItem}) => (<ul>
<li><Item todoItem={todoItem} /></li>
<li><Item todoItem={'Сделать дз по 5 урокам'} /></li>
<li><Item todoItem={'Сделать все дела' } /></li>
</ul>);

export default ItemList;
