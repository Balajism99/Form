import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { patchComment } from '../redux/post';
import {  PostData } from '../redux/postdata';


export default function FormSuccess() {
 const dispatch = useDispatch()
 const {username, email, checkbox, select, comments } = useSelector((state) => state.fetch.username);
const data ={username, email, checkbox, select, comments }
console.log(data)
 const url="http://localhost:9000/createUser"
 function handleSubmit(){
  axios.post(url, {
    data
  })
  .then(res =>{
    console.log(res)
  })
 }
 useEffect(()=>{
  dispatch(PostData(data))

 })
  return (
    <div>
    <div>
      <h1 data-testid="username">Users</h1>
      <select className="dropdown">
      <option >Name: {username}</option>
    <option>Email: {email}</option>
    <option>Training: {checkbox}</option>
    <option>Location: {select}</option>
    <option>Comments: {comments}</option>
       </select>
    </div>
   <button onSubmit={handleSubmit()}>Post to server</button>
   </div>
       
  )
}

/* <select className="dropdown">
    {
      data.map((user) => <option key={user.id}>{user.name}</option>)
        }
        </select>
        */