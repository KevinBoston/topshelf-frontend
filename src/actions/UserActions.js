import {Redirect} from 'react-router-dom'
export const fetchExistingUser = () => {
    const user_url = 'http://localhost:3000/users/show'
    return (dispatch) => {
        fetch(user_url)
        .then(res => res.json())
        .then(user => dispatch({
            type:'LOGIN_USER',
            payload: user
        }))
    }
}

export const createUser = (username) => {
    const user_url = 'http://localhost:3000/users'
    return (dispatch) => {
        fetch(user_url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(username)
        })
        .then(res => res.json())
        .then(userData => {
            dispatch({type: 'CREATE_USER', payload: userData})
        })
    }
}

export const fetchItems = () => {
    const item_url = 'http://localhost:3000/items'
    return (dispatch) => {
        fetch(item_url)
        .then(res => res.json())
        .then(items => dispatch({
                type:'GET_ITEMS',
                payload: items
        })
    )}
}

export const addItem = (itemInfo) => {
    const item_url = 'http://localhost:3000/items/'
    return (dispatch) => {
        fetch(item_url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(itemInfo)
        })
        .then(res => res.json())
        .then(item => dispatch({
            type:'ADD_ITEM',
            payload: item
        }))
    }
}

export const deleteItem = itemId => {
    //debugger
    return (dispatch) => {
        const item_url = `http://localhost:3000/items/${itemId}`
      fetch(item_url, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(dispatch({type: 'DELETE_ITEM', payload: itemId}))
    };
  };

  export const searchForItem = term => {
      //console.log(term)
      return (dispatch) => {
          dispatch({
          type: 'SEARCH_FOR_ITEMS',
          payload: term
      })
    }
  }