import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import { EmployeeData } from './EmployeeData';

function App() {
  const [data, setData] = useState([])
  const [id, setId] = useState(0)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [isUpdate, setIsUpdate] = useState(false)

  useEffect(() => {
    setData(EmployeeData)
  }, []);

  const handleEdit = (id) => {
    const dt = data.filter(item => item.id === id);
    if (dt !== undefined) {
      setIsUpdate(true)
      setId(id)
      setFirstName(dt[0].firstName)
      setLastName(dt[0].lastName)
      setAge(dt[0].age)
    }
  }

  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are you sure to delete this item?")) {
        const dt = data.filter(item => item.id !== id)
        setData(dt);
      }
    }
  }

  const handleSave = (e) => {

    let error = '';
    if (firstName === '')
      error += 'First name is required'
    if (lastName === '')
      error += 'Last name is required'
    if (age === '')
      error += 'Age is required'

    if (error !== '') {
      alert('Please fill in the required fields: ' + error);
      return;
    }

    e.preventDefault();

    const lastId = data.length > 0 ? data[data.length - 1].id : 0


    const dt = [...data]
    const newObject = {
      id: lastId + 1,
      firstName: firstName,
      lastName: lastName,
      age: age
    }

    dt.push(newObject)
    setData(dt)
  }


  const handleClear = () => {
    setId(0);
    setFirstName('');
    setLastName('');
    setAge('');
    setIsUpdate(false)
  }

  const handleUpdate = () => {
    const index = data.map((item) => {
      return item.id
    }).indexOf(id)

    const dt = [...data]
    dt[index].firstName = firstName
    dt[index].lastName = lastName
    dt[index].age = age

    setData(dt)
    handleClear()
  }

  return (
    <>
      <div className="App">

        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px", marginBottom: "10px" }}>
          <label style={{ marginLeft: "10px" }}>First Name :
            <input type="text" placeholder='Enter First Name' style={{ marginLeft: "20px" }} onChange={(e) => setFirstName(e.target.value)} value={firstName} />
          </label>
          <label style={{ marginLeft: "20px" }}>Last Name :
            <input type="text" placeholder='Enter Last Name' style={{ marginLeft: "20px" }}
              onChange={(e) => setLastName(e.target.value)} value={lastName} />
          </label>
          <label style={{ marginLeft: "20px" }}>Age :
            <input type="text" placeholder='Enter Age' style={{ marginLeft: "20px" }}
              onChange={(e) => setAge(e.target.value)} value={age} />
          </label>
          <div>{
            !isUpdate ?
              <button className='btn btn-primary' style={{ marginLeft: "20px"}} onClick={(e) => handleSave(e)}>Save</button>
              :
              <button className='btn btn-primary' style={{ marginLeft: "20px"}} onClick={() => handleUpdate()}>Update</button>
          }
            <button className='btn btn-danger' style={{ marginLeft: "20px"}} onClick={() => handleClear()}>Clear</button>
          </div>
        </div>

        <div className="tab-mar">

          <table className='table table-hover'>
            <thead>

              <tr>
                <td>Sr.no</td>
                <td>Id</td>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Age</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {
                data.map((item, index) => {
                  return (
                    <tr key={(index)}>
                      <td>{index + 1}</td>
                      <td>{item.id}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.age}</td>
                      <td>
                        <button className='btn btn-primary' onClick={() => handleEdit(item.id)}>Edit</button>
                        <button className='btn btn-danger' onClick={() => handleDelete(item.id)} style={{ marginLeft: "10px" }}>Delete</button>
                      </td>
                    </tr>
                  )
                }
                )
              }

            </tbody>
          </table>
          <div style={
            {
              width: "300px",
              height: "1300px",
              backgroundColor: "white",
              position: "absolute",
              left: "85%",
              top: "15%"

            }}>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
