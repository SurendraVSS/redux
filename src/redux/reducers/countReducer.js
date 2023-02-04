const initialState = {
    count :0
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'COUNT_INCRESE':
            return{
                count:state.count + 1
            };

        case 'COUNT_DECRESE':
            return {
                count: state.count - 1
            };
           default:
            return state
    }
}