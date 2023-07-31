import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function CreatUser() {
  const [FirstName, setFirstName] = useState()
  const [LastName, setLastName] = useState()
  const [Age, setAge] = useState()
  const navigate = useNavigate()

  const Submit = (e)=> {
    e.preventDefault()
    axios.post('http://localhost:3005/createUser', {FirstName, LastName, Age}).then((result)=>{
      console.log(result)
      navigate('/')
    }).catch((err)=>{
      console.log('error', err)
    })
  }

  return (
    <>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <form onSubmit={Submit}>
            <h2>Add User</h2>
            <div className="mb-2">
                <label htmlFor="">First Name</label>
                <input type="text" placeholder="Enter First Name" className="form-control"
                onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div className="mb-2">
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder="Enter Last Name" className="form-control"
                onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div className="mb-2">
                <label htmlFor="">Age</label>
                <input type="text" placeholder="Enter Age" className="form-control"
                onChange={(e) => setAge(e.target.value)}/>
            </div>
            <div className="d-flex justify-content-between">
                <button className="btn btn-success">Submit</button>
                <Link to="/" className="btn btn-success">Back</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreatUser;
