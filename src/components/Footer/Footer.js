import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ count }) => (<div> Мне нужно сделать {count} дела! </div>);
Footer.defaultProps = { //нужны для указания, какое значение нужно передавать в props,
  //если ожидаемое значение не было получено от родителя.
    count: 0
};

Footer.proptypes = {
    count: PropTypes.number.isRequired
};
export default Footer;
