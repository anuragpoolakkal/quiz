import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function QuizCard({ quiz, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{quiz.title}</Text>
      <Text style={styles.info}>5 Questions</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginRight: 15,
    width: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  info: {
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
  },
});

export default QuizCard;