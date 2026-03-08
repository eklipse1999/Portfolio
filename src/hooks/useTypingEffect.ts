import { useEffect, useRef, useState } from 'react';

interface UseTypingEffectProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  pause?: number;
}

export function useTypingEffect({ words, speed = 80, deleteSpeed = 50, pause = 2000 }: UseTypingEffectProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const tick = () => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
          timeoutRef.current = setTimeout(tick, speed);
        } else {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
          timeoutRef.current = setTimeout(tick, deleteSpeed);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, 50);
    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, currentWordIndex, words, speed, deleteSpeed, pause]);

  return displayText;
}
