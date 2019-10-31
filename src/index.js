import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App/App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

let initialPets = [
    {id: 1,
    p_name: 'fluffy',
    p_breed: 'dog',
    p_color: 'yellow',
    p_checkIn: false,
    p_checkInDate: null,
    p_owner_id: 3}
]

const petReducer = (state=initialPets, action)=>{
    switch(action.type){
        case 'SET_PETS':
            return action.payload;
        default:
            return state
    }
}

let initialOwners = [
    {id: 1, Owner_name: 'Naomi'},
    {id: 2, Owner_name: 'Misky'},
    {id: 3, Owner_name: 'Nolan'}
]

const ownerReducer = (state=initialOwners, action)=>{
    switch(action.type){
        case 'SET_OWNERS':
            return action.payload;
        default:
            return state
    }
}

const storeInstance = createStore(
    combineReducers({
        petReducer,
        ownerReducer
    })
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
