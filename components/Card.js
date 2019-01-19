import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import AuthorRow from './AuthorRow';

export default class Card extends Component {
  static propTypes = {
    fullname: PropTypes.string.isRequired,
    image: Image.propTypes.source.isRequired,
    linkText: PropTypes.string.isRequired,
    onPressLinkText: PropTypes.func.isRequired,
  };

  static defaultProps = {
    linkText: '',
    onPressLinkText: () => {},
  };

  render () {}
};
