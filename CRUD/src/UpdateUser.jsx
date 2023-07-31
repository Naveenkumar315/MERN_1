import React, { useEffect , useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


function UpdateUser () {
    const [FirstName, setFirstName] = useState()
    const [LastName, setLastName] = useState()
    const [Age, setAge] = useState()
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        axios
          .get('http://localhost:3005/getUser/'+id)
          .then((res) => {
            const user = res.data; // Access the data from the API response
            setFirstName(user.FirstName); // Update state with the received data
            setLastName(user.LastName);
            setAge(user.Age);
          })
          .catch((err) => {
            console.log(err);
          });
      }, [id]);

      const Submit = (e) =>{
        e.preventDefault()
        axios
          .put('http://localhost:3005/updateUser/'+id, {FirstName,LastName,Age})
          .then((res) => {
            navigate('/')
          })
          .catch((err) => {
            console.log(err);
          });
      }


    return (
      <>
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
          <div className="w-50 bg-white rounded p-3">
            <form onSubmit={Submit}>
              <h2>Update User</h2>
              <div className="mb-2">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  value={FirstName}
                  placeholder="Enter First Name"
                  className="form-control"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  value={LastName}
                  placeholder="Enter Last Name"
                  className="form-control"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="">Age</label>
                <input
                  type="text"
                  value={Age}
                  placeholder="Enter Age"
                  className="form-control"
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="d-flex justify-content-between">
                <button className="btn btn-success">Update</button>
                <Link to="/" className="btn btn-success">
                  Back
                </Link>
              </div>
            </form>
          </div>
        </div>
      </>
    );
}

export default UpdateUser;