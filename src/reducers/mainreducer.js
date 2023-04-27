import incdec from "./incdec";
import { combineReducers } from "redux";

const mainreducer = combineReducers({       //object all reducers are combined here

        incdec:incdec,   //key,value of object
        //changebackground,   //we can write multiple reducers here
})


export default mainreducer;