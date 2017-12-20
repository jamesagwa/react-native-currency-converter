import React, { Component, InputHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import color from 'color';

import styles from './styles';

const InputWithButton = (props) => {
  const {
    buttonText, onPress, editable = true, textColor,
  } = props;

  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier);
  const containerStyles = [styles.container];
  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }

  const inputTextStyles = [styles.buttonText];
  if (textColor) {
    inputTextStyles.push({ color: textColor });
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.buttonContainer}
        onPress={onPress}
      >
        <Text style={inputTextStyles}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      {/* using ...props on a component whatever props that is being supplied */}
      {/* to the parent component as props will be passed in to it automatically */}
      <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
    </View>
  );
};

InputWithButton.propTypes = {
  buttonText: PropTypes.string,
  onPress: PropTypes.func,
  editable: PropTypes.bool,
};

export default InputWithButton;
