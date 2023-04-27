import React from "react";
import './App.css'
import { useSelector,useDispatch } from "react-redux"; //bcz we are using store here (select an show)
import { incNumber,decNumber } from "./actions/action";

const App = () =>
{
  //getting data with useselector
  const myState = useSelector((state)=>state.incdec); //we will get state of a reducer here
  const dispatch=useDispatch();

  return (
      <div>
          <div className="container">
            
            <h1>Increment/Decrement counter</h1>
            <h4>Using React Redux</h4>
            <div className="quantity">
              <a className="quantity_minus" title="Decrement" onClick={()=>dispatch(decNumber())}><span>-</span></a>
              <input name="quantity" type="text" className="quantity_input" value={myState}/>
              <a className="quantity_plus" title="Increment"onClick={()=>dispatch(incNumber())} ><span>+</span></a>
            </div>
            
          </div>
      </div>
  );
};

export default App;