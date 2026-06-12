export const normalize = (value) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();

export const isCorrectAnswer = (input, answers) => {
  const normalizedInput = normalize(input);

  return answers.some(
    (answer) =>
      normalize(answer) === normalizedInput ||
      normalizedInput.includes(normalize(answer)) ||
      normalize(answer).includes(normalizedInput),
  );
};

export const wrongMessages = ["Izgleda da ne voliš Petru"];
