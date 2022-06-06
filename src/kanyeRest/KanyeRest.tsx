import { Button } from '@mui/material';
import { useState, useEffect } from 'react';

interface KanyeReponse {
    quote: string;
}

export default function KanyeRest() {

    const [quote, setQuote] = useState<KanyeReponse>();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        loadQuote();
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

    return <div style={{ margin: "4rem" }}>
        { isLoaded && quote ? error ? <p> { error } </p> : <p><i>{ quote.quote } <b> <br/> - Kanye Rest </b></i></p> : <p>Loading...</p> }
        <Button 
          onClick={ loadQuote }
          variant="outlined"
          style={{ margin: "1rem" }}
          >
          Click me
        </Button>
    </div>;
}