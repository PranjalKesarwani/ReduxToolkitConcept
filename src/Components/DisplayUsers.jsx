import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/slices/UserSlice'


const DisplayUsers = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => { return state.user });
  const deleteSingleUser = (id) => {
    dispatch(removeUser(id));
  }

  return (
    <div>
      {data.map((element, id) => {
        return <h1 key={id}>{element} <span><i className="fa-sharp fa-solid fa-trash" onClick={() => { deleteSingleUser(id) }}></i></span></h1>
      })}
    </div>
  )
}

export default DisplayUsers
