import React, { useReducer } from 'react'
function reducer(state,action){
    if(action.type=='age'){
        return  {age: state.age + 1}
    }
    return {...state}
    // throw Error('Unknown action.');
}
function Comphonent4() {
    // const [state,dispatch]=useReducer(reducer,{name:'nmae',age:20})
    const [state, dispatch] = useReducer(reducer, { age: 42 });
//   return (
//     <div>C
//         <button onClick={dispatch({type:'age'})}></button>
//     </div>
//   )
return (
    <>
      <button onClick={() => {
        dispatch({ type: 'age' })
      }}>
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
      <button onClick={() => {
        dispatch({ type: 'agee' })
      }}>
        Increment agee
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}

export default Comphonent4;