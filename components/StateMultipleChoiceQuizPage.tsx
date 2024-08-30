import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import style from "../Styles";
import { Question, quizQuestions } from "../types/QuizQuestions";
import ChoiceButton from "../ui-components/ChoiceButton";

export default function StateMultipleChoiceQuizPage() {
  const [currentQuestionIndex, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const shuffled = [...quizQuestions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);
    setShuffledQuestions(shuffled);
  }, []);

  const currentQuestion: Question = shuffledQuestions[currentQuestionIndex] || {
    questionText: "",
    option: [],
    correctAnswer: "",
  };

  const handleAnswer = (selectedOption: string) => {
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const FinalScore = (
    <View>
      <Text>Quiz Finished</Text>
      <Text>
        Your score: {score} Out of: {shuffledQuestions.length}
      </Text>
    </View>
  );

  const Question = (
    <View>
      <Text style={style.questionTextStyle}>
        {currentQuestion.questionText}
      </Text>
      {currentQuestion.option.map((option) => (
        <ChoiceButton
          key={option}
          text={option}
          onPress={() => handleAnswer(option)}
        />
      ))}
    </View>
  );

  return <View>{!quizFinished ? Question : FinalScore}</View>;
}
