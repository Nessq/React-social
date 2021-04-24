const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE'

const initialState = {
    dataDialog: [
        {id: '1', name: 'Max'},
        {id: '2', name: 'Dasha'},
        {id: '3', name: 'Lara'},
    ],

    dataMessage: [
        {id: '1', message: 'qwee'},
        {id: '2', message: 'qwee'},
        {id: '3', message: 'Laqwera'},
    ],
}

export const dialogsReducer = (state = initialState, action) =>{



    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id : state.dataMessage.length+1,
                message: action.payload,
            }
            return {...state, dataMessage: [...state.dataMessage, newMessage]}

        default:
            return state

    }

}

export const addNewMessageActionCreate = (newMessage) => ({type: ADD_NEW_MESSAGE, payload: newMessage})
