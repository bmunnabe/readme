// Calling CHILD method from PARENT
// ----------------------------------
const { forwardRef, useRef, useImperativeHandle } = React;
const Child = forwardRef((props, ref) => {
  
  useImperativeHandle(ref, () => ({
    getAlert() {
      alert("getAlert from Child");
    }
  }));

  return <h1>Hi</h1>;
});

const Parent = () => {
  const childRef = useRef();
  return (
    <div>
      <Child ref={childRef} />
      <button onClick={() => childRef.current.getAlert()}>Click</button>
    </div>
  );
};

ReactDOM.render( <Parent />, document.getElementById('root') );



// Append HTML
//---------------------------------
const myHtmlContent = () => ( { __html: 'First &middot; Second' } )

function MyComponent() {
  return <div dangerouslySetInnerHTML={myHtmlContent()} />
}
  
  
  
  
  
  
  
  
  
  
  //HOOKS
import React, { useEffect, useState } from "react";
import "./style.css";

export default function App() {

  const [age, setAge] = useState(99)
  const handleClick = () => setAge(age + 1)

  useEffect( () => {
    console.log( 'test' );
    return () => {
      console.log('called during unmounting');
    }
  }, [ age ] );

  const someValue = "someValue"
  const doSomething = () => {
    return someValue
  }

  return (
    <div>
      <Age age={age} handleClick={handleClick}/>
      <Instructions doSomething={doSomething} />
    </div>
  )
}


const Age = ({ age, handleClick }) => {
return (
  <div>
    <div style={{ border: '2px', background: "papayawhip", padding: "1rem" }}>
      Today I am {age} Years of Age
    </div>
    <pre> - click the button below 👇 </pre>
    <button onClick={handleClick}>Get older! </button>
  </div>
)
}

const Instructions = React.memo((props) => {
return (
  <div style={{ background: 'black', color: 'yellow', padding: "1rem" }}>
    <p>Follow the instructions above as closely as possible</p>
  </div>
)
})

