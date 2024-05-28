"use client";

import { quizQuestions } from "@/question";
import { Button } from "./ui/button";
import { useQuiz } from "@/context/useQuizContext";
import { useEffect, useState } from "react";
import Image from "next/image";
import { questionsStatusChecker } from "@/lib/utils";

const PopquizSelectItem = () => {
  const {
    currentQuestionIndex,
    handlePreCheckedInput,
    score,
    showScore,
    selectedOption,
    handleCorrectOption,
    handleNextQuestion,
  } = useQuiz();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const lastQuestion = questionsStatusChecker(score, selectedOption).length;

  useEffect(() => {
    setIsTransitioning(true);
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [currentQuestionIndex]);

  return (
    <div>
      {showScore && !lastQuestion ? (
        <div>
          <h2>
            Your Score: {score.length}/{quizQuestions.length}
          </h2>
        </div>
      ) : (
        <div>
          <div
            className="flex flex-col gap-5 md:flex-row items-center transition-opacity duration-500 ease"
            style={{ opacity: isTransitioning ? 0 : 1 }}>
            {quizQuestions[currentQuestionIndex].options.map((option) => {
              return (
                <div
                  key={option.id}
                  className={`shadow-lg rounded-md transform transition-all duration-500 ease ${
                    isTransitioning ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
                  }`}>
                  <label>
                    <div>
                      <Image
                        src={option.image.src}
                        alt="quiz image"
                        width={320}
                        height={200}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="p-3">
                      <input
                        type="radio"
                        name="quiz"
                        value={option.id}
                        checked={handlePreCheckedInput(option.id)}
                        onChange={() => handleCorrectOption(option.id)}
                        className="appearance-none h-4 w-4 border-2 border-gray-300 rounded-full checked:bg-blue-600 focus:outline-none"
                      />
                      <span className="px-3">{option.text}</span>
                    </div>
                  </label>
                </div>
              );
            })}
          </div>
          <div className="pt-3 flex justify-end">
            <Button onClick={handleNextQuestion}>{!lastQuestion ? "Завершити" : "Наступне"}</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopquizSelectItem;
