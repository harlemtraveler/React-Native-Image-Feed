import { SafeAreaView, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import NavigationBar from '../components/NavigationBar';
import CommentInput from '../components/CommentInput';
import CommentList from '../components/CommentList';

export default function Comments({
  style,
  comments,
  onClose,
  onSubmitComment,
}) {
  return (
    <SafeAreaView style={style}>
      <NavigationBar
        title="Comments"
        leftText="Close"
        onPressLeftText={onClose}
      />
      <CommentInput placeholder="Leave a comments" onSubmit={onSubmitComment} />
      <CommentList items={comments} />
    </SafeAreaView>
  );
};

Comments.propTypes = {
  style: ViewPropTypes.style,
  onClose: PropTypes.func.isRequired,
  onSubmitComment: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Comments.defaultProps = {
  style: null,
};
