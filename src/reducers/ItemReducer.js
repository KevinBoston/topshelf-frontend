function ItemReducer(state = { items: [], user: {username: undefined}}, action) {
    console.log(action)
    switch (action.type) {

        case 'ADD_ITEM':
            if (action.payload.error === "Internal Server Error") {
                return state
            } else {
                return {...state, items:[...state.items, action.payload.data]}
            }

            

        case 'GET_ITEMS':
            
            return {...state, items: action.payload.data}

        case 'CREATE_USER':
            return {...state, user: action.payload.data.attributes}
        
        case 'DELETE_ITEM':
            //debugger
            const filteredItems = state.items.filter(item => item.id !== action.payload)
            return {...state, items: filteredItems}

        default:
            return state;
    }

}

export default ItemReducer