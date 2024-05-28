"use client";

import { useQuiz } from "@/context/useQuizContext";

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const status = ["completed", "missed", "active"];

const PopquizNumbersList = ({ currentNumber }: { currentNumber: number }) => {
  const { currentQuestionIndex, setCurrentQuestionIndex, selectedOption } = useQuiz();
  const activeSquare = currentNumber === currentQuestionIndex + 1;
  const selectedAnswer = selectedOption[currentNumber - 1].options.some(
    (option) => option.isCorrect,
  );

  let squareStatus: string;

  if (selectedAnswer) {
    squareStatus = "completed";
  } else if (activeSquare) {
    squareStatus = "active";
  } else {
    squareStatus = "missed";
  }

  const squareClasses = `hover:bg-[#2d7fd4] ${
    squareStatus === "completed"
      ? "bg-green-500"
      : squareStatus !== "active"
      ? "bg-red-500"
      : "bg-[#2d7fd4]"
  } text-white text-base leading-9 text-center w-9 h-9 cursor-pointer`;

  return (
    <li className={squareClasses} onClick={() => setCurrentQuestionIndex(currentNumber - 1)}>
      {currentNumber}
    </li>
  );
};

const PopquizCounter = () => {
  return (
    <ul className="list-none flex gap-3 my-5 max-w-lg flex-wrap">
      {numbers.map((item, index) => {
        return <PopquizNumbersList key={index} currentNumber={item} />;
      })}
    </ul>
  );
};

export default PopquizCounter;
