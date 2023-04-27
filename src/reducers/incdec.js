const initialState=0; //current state

//reducer function containes state and action
const incdec = (state=initialState,action) =>
{
        //got updated state here
        switch(action.type)
        {
            case "INCREMENT" : return state +1;
            case "DECREMENT" : return state -1;
            default: return state;
        }

}

export default incdec;