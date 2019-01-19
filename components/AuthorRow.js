import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import Avatar from './Avatar';
import getAvatarColor from '../utils/getAvatarColor';
import getInitials from '../utils/getInitials';

export default function AuthorRow({ fullname, linkText, onPressLinkText }) {
  return (
    <View style={styles.container}>
      <Avatar
        size={35}
        initials={getInitials(fullname)}
        backgroundColor={getAvatarColor(fullname)}
      />
      <Text
        style={styles.text}
        numberOfLines={1}>
        {fullname}
      </Text>
      {!!linkText && (
        <TouchableOpacity onPress={onPressLinkText}>
          <Text numberOfLines={1}>{linkText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

AuthorRow.propTypes = {
  fullname: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  onPressLinkText: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  text: {
    flex: 1,
    marginHorizontal: 6,
  },
});

/*
  Reference Notes
  ---------------

  Conditonal Statment:
    1. Conditionals double negation with "!!" makes sure we're dealiing with a Boolean value

    2. Since linkText is a string, the && expression would evaluate to a string type when linkText is the empty string '' – in React Native (unlike on the web), we’re not allowed to render string values outside of Text (even empty strings).
*/
