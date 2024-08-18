import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { Question } from "../types/Question";
import { quizQuestions } from "../types/Question";

export default function StateMultipleChoiceQuizApp() {
  const [currentQuestionIndex, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const currentQuestion: Question = quizQuestions[currentQuestionIndex];
  const handleAnswer = (selectedOption: string) => {
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <View>
      {quizFinished ? (
        <View>
          <Text>Quiz Finished</Text>
          <Text>
            Your Score: {score} Out of: {quizQuestions.length}
          </Text>
        </View>
      ) : (
        <View>
          <Text>{currentQuestion.questionText}</Text>
          {currentQuestion.option.map((option) => (
            <Button
              key={option}
              title={option}
              onPress={() => handleAnswer(option)}
            ></Button>
          ))}
        </View>
      )}
    </View>
  );
}
