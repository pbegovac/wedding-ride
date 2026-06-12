import { useState } from "react";
import styled from "styled-components";
import { questions } from "../data/questions";
import Modal from "./Modal";
import { isCorrectAnswer, wrongMessages } from "../utils/quizHelpers";

const Wrapper = styled.div`
  min-height: 100vh;
  background: #0d0d0d;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

const NavigationRow = styled.div`
  position: absolute;
  top: 20px;
`;

const SecondaryButton = styled.button`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #555;
  background: transparent;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-right: 2rem;
`;

const ErrorMessage = styled.div`
  margin-top: 12px;
  color: #ff6b6b;
  text-align: center;
`;

const Hint = styled.div`
  margin-top: 12px;
  color: #ffd166;
  text-align: center;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: none;
  margin-top: 10px;
  font-size: 16px;
  outline: none;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 12px;
  background: #00ff88;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
`;

export default function Quiz({ swiper, goToIntro }) {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const [attempts, setAttempts] = useState(0);

  const current = questions[index];

  const resetQuestionState = () => {
    setInput("");
    setError("");
    setAttempts(0);
    setIsCorrect(false);
    setShowModal(false);
  };

  const checkAnswer = () => {
    const answers = Array.isArray(current.answer)
      ? current.answer
      : [current.answer];

    if (isCorrectAnswer(input, answers)) {
      setError("");
      setAttempts(0);
      setIsCorrect(true);
      setShowModal(true);
    } else {
      const randomMessage =
        wrongMessages[Math.floor(Math.random() * wrongMessages.length)];

      setAttempts((prev) => prev + 1);
      setError(randomMessage);
    }
  };

  const nextQuestion = () => {
    if (index >= questions.length - 1) {
      resetQuestionState();
      return;
    }

    resetQuestionState();
    setIndex((prev) => prev + 1);
  };

  const nextQuestionDirect = () => {
    if (index < questions.length - 1) {
      resetQuestionState();
      setIndex((prev) => prev + 1);
    }
  };

  const previousQuestion = () => {
    if (showModal) {
      setShowModal(false);
      return;
    }

    if (index === 0) {
      goToIntro();
      return;
    }

    resetQuestionState();
    setIndex((prev) => prev - 1);
  };

  if (index >= questions.length) {
    return (
      <Wrapper>
        <h1>🎉 Mission Complete</h1>
        <p>You have successfully revisited the memories that led to Petra.</p>
        <p>Wedding unlocked. 🚴❤️</p>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <NavigationRow>
        <SecondaryButton onClick={previousQuestion}>←</SecondaryButton>

        {index < questions.length - 1 && (
          <SecondaryButton onClick={nextQuestionDirect}>→</SecondaryButton>
        )}
      </NavigationRow>

      <h2>{current.question}</h2>

      <Input
        className="swiper-no-swiping"
        placeholder="Jesi sto posto siguran..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            checkAnswer();
          }
        }}
      />

      <Button onClick={checkAnswer}>Konačan odgovor</Button>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {attempts >= 3 && current.hint && <Hint>💡 {current.hint}</Hint>}

      {showModal && <Modal data={current} onNext={nextQuestion} />}
    </Wrapper>
  );
}
