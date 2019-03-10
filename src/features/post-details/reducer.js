const postReducer = ((state=[], action) => {
    switch(action.type){
        case 'SELECT_POST':
            return action.payload
        default:
            return state
    }
})

export default postReducer