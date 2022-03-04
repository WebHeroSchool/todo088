import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes  from 'prop-types';

const Contacts = ({ myContacts }) => (
	<h1> {myContacts} </h1>
)

Contacts.defaultProps = {
	myContacts: "Secret "
}

Contacts.propTypes = {
	myContacts: PropTypes.string
}

export default Contacts;
