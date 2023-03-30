import React from 'react'
import DeleteAllUser from './DeleteAllUser'
import styled from 'styled-components';
import { fakeUserData } from '../api';
import { useDispatch } from 'react-redux';
import { addUsers } from '../store/slices/UserSlice';

import DisplayUsers from './DisplayUsers';

const UserDetails = () => {

   

const dispatch = useDispatch();
   

    const addNewUser =(newuser)=>{
        dispatch(addUsers(newuser));     //Called this action creator and it goes to reducers and ran
    }
   
    return (
        <React.StrictMode>
            <div className="container content">
                <div className="admin-table">
                    <div className="admin-subtitle h2">List of user details</div>
                    <Button onClick={()=>addNewUser(fakeUserData())}>Add New Users</Button>
                </div>
                <ul>
                  <DisplayUsers/>
                </ul>
                <hr />
                <DeleteAllUser/>
            </div>
        </React.StrictMode>
    )



}
const Button = styled.button({
    color: 'grey',
    border:'none'
  });


export default UserDetails
