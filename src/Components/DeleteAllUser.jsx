import React from 'react'
import { useDispatch } from 'react-redux'
// import { deleteUsers } from '../store/slices/UserSlice';
import {deleteUsers} from '../store/actions'

const DeleteAllUser = () => {
const dispatch = useDispatch();

const clearAllUsers = ()=>{
    dispatch(deleteUsers());
}

    return (
        <React.StrictMode>
            <button onClick={()=>{clearAllUsers()}}>Delete all users</button>
        </React.StrictMode>
    )
}

export default DeleteAllUser
