import axios from 'axios';
import { INCREMENT, DECREMENT } from './types';
import { FETCH_USER_ERROR, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from './types'
import { CREATE_USER_ERROR, CREATE_USER_REQUEST, CREATE_USER_SUCCESS } from './types'
import { DELETE_USER_SUCCESS } from './types';

export const increaseCounter = () => {
    return {
        type: INCREMENT,
    };
};

export const decreaseCounter = () => {
    return {
        type: DECREMENT,
    };
};

// start doing finish
export const fetchAllUser = () => {
    return async (dispatch, getState) => {
        dispatch(fetchUserRequest());
        try {
            const res = await axios.get('http://localhost:8080/users/all')
            const data = res && res.data ? res.data : []
            dispatch(fetchUserSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(fetchUserError())
        }
    }
}

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (payload) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload
    }
}

export const fetchUserError = () => {
    return {
        type: FETCH_USER_ERROR
    }
}

//--------------- create user
export const createUserRequest = () => {
    return {
        type: CREATE_USER_REQUEST
    }
}

export const createUserSuccess = () => {
    return {
        type: CREATE_USER_SUCCESS
    }
}

export const createUserError = () => {
    return {
        type: CREATE_USER_ERROR
    }
}

export const createNewUserRedux = (user) => {
    return async (dispatch, getState) => {
        dispatch(createUserRequest())
        try {
            const res = await axios.post('http://localhost:8080/users/create', { ...user })
            if (res && res.data.errCode === 0) {
                dispatch(createUserSuccess())
                dispatch(fetchAllUser())
            }
        } catch (error) {
            console.log(error)
            dispatch(createUserError())
        }
    }
}

//-------------------
export const deleteUserRedux = (id) => {
    return async (dispatch, getState) => {

        try {
            let res = await axios.post(`http://localhost:8080/users/delete/${id}`)
            if (res && res.data.errCode === 0) {
                dispatch(deleteUserSuccess())
                dispatch(fetchAllUser())
            }
        } catch (err) {
            console.log(err)
        }
    }
} 

export const deleteUserSuccess = () => {
    return {
        type: DELETE_USER_SUCCESS
    }
}

