import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function QuestionOption({ option, isSelected, isCorrect, isWrong, onSelect, disabled }) {
  const getOptionStyle = () => {
    if (isCorrect) return [styles.option, styles.correctOption];
    if (isWrong) return [styles.option, styles.wrongOption];
    if (isSelected) return [styles.option, styles.selectedOption];
    return styles.option;
  };

  return (
    <TouchableOpacity
      style={getOptionStyle()}
      onPress={onSelect}
      disabled={disabled}
    >
      <Text style={styles.optionText}>{option}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  option: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: '#2196F3',
  },
  correctOption: {
    backgroundColor: '#4CAF50',
  },
  wrongOption: {
    backgroundColor: '#f44336',
  },
  optionText: {
    fontSize: 16,
  },
});

export default QuestionOption;