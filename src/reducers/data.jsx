export default function payload(state = [], action) {

    if (action.type === 'ADD_USER') {

        return [
            ...state,
            action.data
        ];

    }

    if (action.type === 'UPDATE_USER') {

        for(let i = 0; i < state.length; i++){

            if(state[i]._id === action.data._id) {

                state[i] = action.data;
                return [
                    ...state
                ];

            }

        }

    }

    if (action.type === 'DELETE_USER') {

        for(let i = 0; i < state.length; i++){

            if(state[i]._id === action.data) {

                state.splice(i, 1);
                return [
                    ...state
                ];

            }

        }

    }

    if (action.type === 'LoadData') {

        return action.db;

    }

    return state;

}