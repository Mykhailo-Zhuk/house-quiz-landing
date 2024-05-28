import { Navigation, Header, Footer, Popquiz } from "@/components/index";
import { QuizProvider } from "@/context/useQuizContext";

export default function Home() {
  return (
    <main className="relative min-h-screen p-5">
      <div className="absolute inset-0 -z-10 bg-hero bg-cover bg-center"></div>
      <div className="absolute inset-0 -z-10 bg-black bg-opacity-50" />
      <Navigation />
      <Header />
      <QuizProvider>
        <Popquiz />
      </QuizProvider>
      <Footer />
    </main>
  );
}
