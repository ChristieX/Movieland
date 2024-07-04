import {useState, useEffect} from 'react'; //used to create states
// plain js object used by react to represent piece of info about the components current state 
// completely managed by the component
import './App.css';

//components
const Person = (props) =>{
  // props is inbuilt react components object
  // props allows you to dynamically pass data to a component
  return (
    <>
      <h1>Name: {props.Name}</h1>
      <h2>Last Name: {props.Last}</h2>
      <h2>Age: {props.Age}</h2>
    </>
  )
}
    

const  App=()=> {
  const name = null
  const [counter, setCounter] = useState(0);
      {/* When a function is called and it begins with use it is called a hook */}
      {/* setCounter is a setter variable 
      Rule of thumb: Set the 2nd variable the same as the first but add the word set to it */}
      {/* useState is a hook that allows you to create a state variable */}
      // useState(initial value)

      useEffect(()=>{
        alert("you've set the counter to "+ counter)
      },[counter]);
      // useEffect is a hook that allows you to run code when a component is mounted
            // the 2nd argument is an array of dependencies
            // if the array is empty it will run the code only when the component is mounted
            // if the array is not empty it will run the code when the component is mounted and when any of the dependencies/variable change
      // dont modify a state in react without using its setter function

  // {} used to add javascript
  const nameIsSet = true;
  return (
    <div className="App">
      <h1><u> JSX & TERNARY OPERATOR </u></h1>
      <h1>Hello {nameIsSet? name : 'Someone'} 
{/* ternary operator */}
      </h1>
      {name ? (
        <>
        <h1>{name}</h1>
        </>
      ):(
        <>
        <h1>test</h1>
        <h2>There is no name</h2>
        </>
      )}
      {/* <></> is used because adjacent jsx elements much be wrapped in an enclosing tag */}
      <hr></hr>

      <h1><u> COMPONENTS AND PROPS </u></h1>
      <Person />  {/* to call components */}
      {/* {}used only for dynamic data for eg. {2+2} */}
      {/* strings can be passed with '' or "" */}
      <Person Name={'John'} Last='Doe' Age='40'/> 
      <Person Name={'Mary'} Last='Doe' Age={5+5}/> 
    
      <hr></hr>
      <h1><u> STATES AND HOOKS </u></h1>
      {/* setCounter(prev+name_of_state) */}
      <button onClick={()=>setCounter((prevCount)=>prevCount-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter((prevCount)=>prevCount+1)}>+</button>
    </div>
  );
}

export default App;
