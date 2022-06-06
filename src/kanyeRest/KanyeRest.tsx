import { useState, useEffect } from 'react';

interface KanyeReponse {
    quote: string;
}

export default function KanyeRest() {

    const [quote, setQuote] = useState<KanyeReponse>();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://api.kanye.rest")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setQuote(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])

    const loadQuote = async () => {
        fetch("https://api.kanye.rest")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setQuote(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
    }

    return <div>
        { isLoaded && quote ? error ? <p> { error } </p> : <p>{ quote.quote }</p> : <p>Loading...</p> }
        <button onClick={ loadQuote }>Click me</button>
    </div>;
}