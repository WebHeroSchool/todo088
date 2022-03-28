import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes  from 'prop-types';


const About = ({ aboutMe }) => (
  	<h1> {aboutMe} </h1>
  )

  About.defaultProps = {
  aboutMe: "About "
  }

  About.propTypes = {
  	aboutMe: PropTypes.string
  }

export default About;
