// TYPES OF HOOKS
// ------------------------------------------------- //

 componentWillMount() {
 // fires immediately before the initial render
 }
 componentDidMount() {
 // fires immediately after the initial render
 }
 componentWillReceiveProps() {
 // fires when component is receiving new props
 }
 shouldComponentUpdate() {
 // fires before rendering with new props or state
 }
 componentWillUpdate() {
 // fires immediately before rendering
 // with new props or state
 }
 componentDidUpdate() {
 // fires immediately after rendering with new P or S
 }
 componentWillUnmount() {
 // fires immediately before component is unmounted
 // from DOM (removed)
 }
 

// TYPES OF COMPONENT
// ------------------------------------------------- //

// Stateless React Component (Functional Component)
const Headline = () => {
   return <h1>React Cheat Sheet</h1>
}

// Stateless Component that receives props (Functional Component)
const Greetings = (props) => {
  return <p>You will love it {props.name}.</p>
}

// use class for local state and lifecycle hooks (Class component)
class App extends React.Component {

  constructor(props) {
    // fires before component is mounted
    super(props);     // makes this refer to this component
    this.state = {    // set state
      isLoggedIn: false,
      username : ''
    };
  }
  
  // conditional rendering of elements and CSS class
  render() {
    const { isLoggedIn, username } = this.state;
    return (
      <div className={`login ${isLoggedIn ? "is-in" : "is-out"}`}>
        {!!isLoggedIn ? <p>Logged in as {username}.</p> : <p>Logged out.</p>}
      </div>
    );
  }
}


