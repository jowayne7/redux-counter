// reducer is a funtion that takes 2 parameters
// current state , action 
// based on this action it returns the new state

// if-else, switch-case

const counter ={
    count : 0,
}

function counterReducer(state, action){
    if(action.type === 'count/increased'){
        return {
            ...state,
            count : state.count + 1,
        }
    }else if(action.type ==='count/decreased'){
        return {
            ...state,
            count : state.count - 1,
        }
    }else {
        return {
            ...state,
            count : 0,
        }
    }
}


export default counterReducer; 
