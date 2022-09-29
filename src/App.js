import React, { useState, useEffect } from 'react';
import Quote from './Component/Quote';

function App() {

  const [quote, setQuote] = useState({
    anime: null,
    character: null,
    quote: null
  });

  const generate = async () => {
    setQuote(await fetchQuote());
  }

  const fetchQuote = async () => {
    return await fetch('https://animechan.vercel.app/api/random')
      .then(response => response.json());
  }

  console.log(fetchQuote())

  useEffect(() => {
    setQuote(fetchQuote());
  }, []);

  return (
    <div className="App">

      <Quote quote={quote} />

      <button onClick={generate} >New Quote</button>

    </div>
  );
}

export default App;
