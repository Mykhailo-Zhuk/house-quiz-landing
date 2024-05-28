"use client";

import { quizQuestions } from "@/question";
import { StaticImageData } from "next/image";
import React, { createContext, useState, ReactNode, useContext, Dispatch } from "react";

interface Option {
  id: number;
  image: StaticImageData;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
}

interface QuizContextType {
  currentQuestionIndex: number;
  score: number[];
  selectedOption: Question[];
  handleCorrectOption: (optionId: number) => void;
  showScore: boolean;
  handleNextQuestion: () => void;
  handlePreCheckedInput: (optionId: number) => boolean | undefined;
  setCurrentQuestionIndex: Dispatch<React.SetStateAction<number>>;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<Question[]>(quizQuestions);
  const [showScore, setShowScore] = useState(false);

  const summarizeCorrectQuestions = () => {
    return selectedOption
      .filter((question) => question.options.some((option) => option.isCorrect))
      .map((question) => question.id);
  };
  const score = summarizeCorrectQuestions();

  const handlePreCheckedInput = (optionId: number) => {
    const option = selectedOption[currentQuestionIndex].options.find(
      (option) => option.id === optionId,
    );
    return option?.isCorrect;
  };

  const handleCorrectOption = (optionId: number) => {
    setSelectedOption((prevOptions) => {
      const updatedOptions = selectedOption[currentQuestionIndex].options.map((option) => {
        if (option.id === optionId) {
          return { ...option, isCorrect: true };
        }
        return { ...option, isCorrect: false };
      });

      const correctedQuestion = {
        ...selectedOption[currentQuestionIndex],
        options: updatedOptions,
      };

      return prevOptions.map((item) =>
        item.id === correctedQuestion.id ? correctedQuestion : item,
      );
    });
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestionIndex + 1;

    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <QuizContext.Provider
      value={{
        handlePreCheckedInput,
        currentQuestionIndex,
        handleCorrectOption,
        selectedOption,
        score,
        showScore,
        handleNextQuestion,
        setCurrentQuestionIndex,
      }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = (): QuizContextType => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};
