import { useState, useEffect } from "react";

export const useTypewriter = (
  words,
  { typeSpeed = 75, eraseSpeed = 40, holdTime = 1400, gapTime = 350 } = {},
) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | holding | erasing | gap

  useEffect(() => {
    const current = words[index % words.length];
    let timer;

    if (phase === "typing") {
      if (text.length < current.length) {
        timer = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
      } else {
        timer = setTimeout(() => setPhase("holding"), 0);
      }
    } else if (phase === "holding") {
      timer = setTimeout(() => setPhase("erasing"), holdTime);
    } else if (phase === "erasing") {
      if (text.length > 0) {
        timer = setTimeout(() => setText(current.slice(0, text.length - 1)), eraseSpeed);
      } else {
        timer = setTimeout(() => setPhase("gap"), 0);
      }
    } else if (phase === "gap") {
      timer = setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setPhase("typing");
      }, gapTime);
    }

    return () => clearTimeout(timer);
  }, [text, phase, index, words, typeSpeed, eraseSpeed, holdTime, gapTime]);

  return text;
};
