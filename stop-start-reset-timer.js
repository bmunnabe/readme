import React, { useEffect, useState } from "react";

export default function App() {
  const [ timer, setTimer ] = useState( 0 );
  const [ toggle, setToggle ] = useState( false );

  useEffect(() => {
    let counter;
    if ( toggle ) {
      counter = setInterval( () => setTimer( ( timer ) => timer + 1 ), 1000 );
    }
    return () => clearInterval(counter);
  }, [ toggle ] );

  const handleReset = () => {
    setTimer( 0 );
    setToggle( false );
  };

  return (
    <div>
      <h1>{ timer }</h1>
      <button onClick={ () => setToggle( true ) }>Start</button>
      <button onClick={ () => setToggle( false ) }>Stop</button>
      <button onClick={ handleReset }>Reset</button>
    </div>
  );
}
