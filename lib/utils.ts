import { Question } from "@/context/useQuizContext";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const questionsStatusChecker = (score: number[], questions: Question[]) => {
  const missingQuestions = questions.filter((question) => !score.includes(question.id));
  return missingQuestions;
};
