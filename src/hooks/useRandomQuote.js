import { useEffect, useState } from 'react';

const useRandomQuote = () => {
  const [qoute, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      let result = await fetch('https://type.fit/api/quotes');
      result = await result.json();

      const randomQuote = result[Math.floor(Math.random() * result.length)];
      setQuote(randomQuote);
    };

    fetchQuote();
  }, []);

  return qoute;
};

export default useRandomQuote;
