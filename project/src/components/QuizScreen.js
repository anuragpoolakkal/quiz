import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import QuestionCard from './quiz/QuestionCard';
import NavigationButtons from './quiz/NavigationButtons';
import { getQuizQuestions, submitQuiz, getPreviousAttempt, resetQuiz } from '../services/quizService';

function QuizScreen({ route, navigation }) {
  const { quizId } = route.params;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [previousAttempt, setPreviousAttempt] = useState(null);
  const [questions] = useState(getQuizQuestions(quizId));

  useEffect(() => {
    const fetchPreviousAttempt = async () => {
      const attempt = await getPreviousAttempt(quizId);
      if (attempt) {
        setPreviousAttempt(attempt);
      }
    };
    fetchPreviousAttempt();
  }, [quizId]);

  const handleAnswer = (questionIndex, optionIndex) => {
    if (previousAttempt) return;
    setAnswers({ ...answers, [questionIndex]: optionIndex });
  };

  const handleSubmit = async () => {
    await submitQuiz(quizId, answers);
    navigation.navigate('Results', { quizId, answers });
  };

  const handleReset = async () => {
    await resetQuiz(quizId);
    setPreviousAttempt(null);
    setAnswers({});
  };

  return (
    <View style={styles.container}>
      {previousAttempt && (
        <TouchableOpacity
          style={[styles.button, styles.resetButton]}
          onPress={handleReset}
        >
          <Text style={styles.buttonText}>Reset Quiz</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.questionLabel}>
        Question {currentQuestion + 1} of {questions.length}
      </Text>

      <QuestionCard
        question={questions[currentQuestion]}
        selectedAnswer={answers[currentQuestion]}
        onSelectAnswer={(optionIndex) => handleAnswer(currentQuestion, optionIndex)}
        isReview={!!previousAttempt}
      />

      <NavigationButtons
        onPrevious={() => setCurrentQuestion((curr) => curr - 1)}
        onNext={() => setCurrentQuestion((curr) => curr + 1)}
        onSubmit={handleSubmit}
        isFirst={currentQuestion === 0}
        isLast={currentQuestion === questions.length - 1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  questionLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 16,
  },
  resetButton: {
    backgroundColor: '#e74c3c',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default QuizScreen;
