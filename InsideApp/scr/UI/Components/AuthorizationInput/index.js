import React from 'react';
import { TextInput } from 'react-native-paper';
import { Colors } from '../../../Resources/Colors';

export default AuthorizationInput = ({
  hideValue,
  value,
  autoCompleteType,
  keyboardType,
  label,
  inputRef,
  onSubmitEditing,
  returnKeyType,
  style,
  onChange
}) => {
  
  const inputsTheme = {
    colors: {
      primary: Colors.buttonColor,
    },
  };

  const onTextChange = (text) => {
    if (onChange != null)
      onChange(text);
  }

  return (
    <TextInput
      value={value}
      onChangeText={onTextChange}
      style={style}
      autoCapitalize={'none'}
      autoCompleteType={autoCompleteType}
      keyboardType={keyboardType}
      label={label}
      onSubmitEditing={onSubmitEditing}
      multiline={false}
      ref={inputRef}
      returnKeyType={returnKeyType}
      secureTextEntry={hideValue}
      theme={inputsTheme}
    />
  );
};