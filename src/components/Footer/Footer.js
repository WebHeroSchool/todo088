import React from 'react';

const Footer = ({ count }) => (<div> Мне нужно сделать {count} дела! </div>);
Footer.defaultProps = { //нужны для указания, какое значение нужно передавать в props,
  //если ожидаемое значение не было получено от родителя.
    count: 0
};
export default Footer;
