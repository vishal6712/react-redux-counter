export const incNumber = () => //simple arrow function with object
{
    return{
        type:"INCREMENT",
    }
}

export const decNumber = () =>{
    return{type:"DECREMENT"};
}

console.log(incNumber);