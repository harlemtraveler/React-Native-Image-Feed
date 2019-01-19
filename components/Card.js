import { Text, View, Image, StyleSheet } from 'react-native';
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

  render () {
    const {
      fullname,
      image,
      linkText,
      onPressLinkText
    } = this.props;

    return (
      <View>
        <AuthorRow
          fullname={fullname}
          linkText={linkText}
          onPressLinkText={onPressLinkText}
        />
        <Image style={styles.image} source={image} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
});


/*
  Styles
  -----
  image
  - <View> style defaults to an "alignItems" value of "stretch"
  - This causes image to stretch horizontally to fil the screen
  - We specified the style "aspectRatio" with a value of "1".
  - This makes the image height match the its full-screen width
  - "backgroundColor" used to provide color while image loads
*/
