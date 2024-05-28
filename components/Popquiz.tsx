"use client";

import { PopquizCounter, PopquizSelectItem } from "@/components/index";
import { quizQuestions } from "@/question";
import { useQuiz } from "@/context/useQuizContext";

const Popquiz = () => {
  const { currentQuestionIndex } = useQuiz();

  const currentQuestion = quizQuestions[currentQuestionIndex].question;

  return (
    <section className="mb-20 mt-10">
      <div className="max-w-screen-xl mx-auto flex items-center justify-center">
        <div className="bg-[#f5f5f5] shadow-lg rounded-lg max-w-screen-lg p-3 w-full">
          <h1 className="text-lg sm:text-xl md:text-3xl">{currentQuestion}</h1>
          <PopquizCounter />
          <PopquizSelectItem />
        </div>
      </div>
    </section>
  );
};

export default Popquiz;
