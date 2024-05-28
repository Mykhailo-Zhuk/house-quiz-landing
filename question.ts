import house from "./public/images/main-bg.png";
import { Question } from "./context/useQuizContext";

export const quizQuestions: Question[] = [
  {
    id: 6290605264,
    question: "What is the capital of France?",
    options: [
      { id: 8098580738, image: house, text: "Paris", isCorrect: false },
      { id: 9220139673, image: house, text: "Berlin", isCorrect: false },
      { id: 9285636769, image: house, text: "Madrid", isCorrect: true },
    ],
  },
  {
    id: 2439952960,
    question: "What is the capital of Ukraine?",
    options: [
      { id: 9523435722, image: house, text: "Kyiv", isCorrect: false },
      { id: 8590635203, image: house, text: "Lviv", isCorrect: false },
      { id: 2539278980, image: house, text: "Kharkiv", isCorrect: false },
    ],
  },
  {
    id: 5756230265,
    question: "What is the capital of Italy?",
    options: [
      { id: 8666058063, image: house, text: "Rome", isCorrect: false },
      { id: 9856318668, image: house, text: "Milan", isCorrect: false },
      { id: 8602957916, image: house, text: "Madrid", isCorrect: false },
    ],
  },
  {
    id: 1085739206,
    question: "What is the capital of Spain?",
    options: [
      { id: 1908530728, image: house, text: "Madrid", isCorrect: false },
      { id: 2085793067, image: house, text: "Barcelona", isCorrect: false },
      { id: 3085739261, image: house, text: "Seville", isCorrect: false },
    ],
  },
  {
    id: 2348753207,
    question: "What is the capital of Germany?",
    options: [
      { id: 2348753208, image: house, text: "Berlin", isCorrect: false },
      { id: 2348753209, image: house, text: "Munich", isCorrect: false },
      { id: 2348753210, image: house, text: "Frankfurt", isCorrect: false },
    ],
  },
  {
    id: 3410857321,
    question: "What is the capital of Japan?",
    options: [
      { id: 3410857322, image: house, text: "Tokyo", isCorrect: false },
      { id: 3410857323, image: house, text: "Osaka", isCorrect: false },
      { id: 3410857324, image: house, text: "Kyoto", isCorrect: false },
    ],
  },
  {
    id: 4578901230,
    question: "What is the capital of Canada?",
    options: [
      { id: 4578901231, image: house, text: "Ottawa", isCorrect: false },
      { id: 4578901232, image: house, text: "Toronto", isCorrect: false },
      { id: 4578901233, image: house, text: "Vancouver", isCorrect: false },
    ],
  },
  {
    id: 5730298451,
    question: "What is the capital of Australia?",
    options: [
      { id: 5730298452, image: house, text: "Canberra", isCorrect: false },
      { id: 5730298453, image: house, text: "Sydney", isCorrect: false },
      { id: 5730298454, image: house, text: "Melbourne", isCorrect: false },
    ],
  },
  {
    id: 6895739204,
    question: "What is the capital of Brazil?",
    options: [
      { id: 6895739205, image: house, text: "Brasília", isCorrect: false },
      { id: 6895739206, image: house, text: "Rio de Janeiro", isCorrect: false },
      { id: 6895739207, image: house, text: "São Paulo", isCorrect: false },
    ],
  },
];
