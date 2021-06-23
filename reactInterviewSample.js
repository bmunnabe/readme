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
